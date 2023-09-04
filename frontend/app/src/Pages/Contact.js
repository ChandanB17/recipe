import React from 'react';
import Smc from '../Components/Smc';

const RecipeContactUs = () => {
  return (
    <div className="recipe-contact-us-container">
      <div className="contact-image">
        <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className='cimg' alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2 className='headc'>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to get in touch!</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button className='btn btnc btn-outline-danger ' type="submit">Send Message</button>
        </form>
        <Smc/>
      </div>
    </div>
  );
};

export default RecipeContactUs;