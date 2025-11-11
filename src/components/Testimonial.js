import React from 'react'
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div>
      <section class="testimonials">
  <div class="heading">
    <h2>Customer Testimonials</h2>
    <p>This tool has transformed my productivity and organization!</p>
  </div>

  <div class="testimonial-content">
    <div class="left-box">
      <div class="quote-box">
        <p class="quote">
          "Using this website has made my tasks so much easier! I can't imagine my day without it."
        </p>

        <div class="author">
          <div class="author-pic"></div>
          <div class="author-info">
            <h4>Sherri Cronin</h4>
            <span>Project Manager, TechCorp</span>
          </div>
        </div>

        <div class="nav-buttons">
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>
    </div>

    
    <div class="right-box">
      <div class="image-frame">
        <img src="../images/testimonial.jpeg" alt="Customer Review" />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Testimonial
