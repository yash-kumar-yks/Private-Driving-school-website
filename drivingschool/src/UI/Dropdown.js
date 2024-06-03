import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  font-family: Arial, sans-serif;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #d0d4f8;
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
  
`
// background-color: ${({ isSelected }) => (isSelected ? '#f1f1f1' : 'white')};
;

const Caret = styled.span`
  border: solid #333;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(135deg)')};
  transition: transform 0.3s ease;
`;

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].label);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option.label);
    setIsOpen(false);
    setFocusedIndex(-1);
    onSelect(option.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % options.length);
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      handleSelect(options[focusedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, focusedIndex]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>
        {selected}
        <Caret isOpen={isOpen} />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
            // isSelected={focusedIndex === index}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};



export default Dropdown;
