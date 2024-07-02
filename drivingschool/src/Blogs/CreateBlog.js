import React, {useState} from 'react'
import './CreateBlog.css';
import { useDispatch, useSelector } from 'react-redux';

export default function CreateBlog() {
  const [category, setCategory] = useState('');  // State for the dropdown
  const [description, setDescription] = useState('');
  const authState = useSelector((state) => state.auth); 
    
  const handleSubmit = async(e) => {
    e.preventDefault();

    const newBlog = {
        category,
        description,
      };
  
      try {
        const response = await fetch(`https://api.example.com/${authState.user.email}/blogs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBlog),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add blog');
        }
  
  
        setCategory('');
        setDescription('');
      } catch (error) {
        console.error('Error adding blog:', error);
        alert("Cant add Blog");

      }
    };
  

  return (
    <div className="add-blog-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="add-blog-form">
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}


