import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 300px;
  font-family: Arial, sans-serif;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0a4e8;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
`;

const Caret = styled.span`
  border: solid #333;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(135deg)')};
  transition: transform 0.3s ease;
`;

const SearchableDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setSearch('');
  };

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    onSelect(option.value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>
        {selected || 'Select city'}
        <Caret isOpen={isOpen} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        {filteredOptions.map(option => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

SearchableDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchableDropdown;
