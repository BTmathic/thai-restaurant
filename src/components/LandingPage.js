import React from 'react';
import About from './About';
import Header from './Header';

const DashboardPage = () => (
    <div>
        <Header />
        <div className='landing-image'>
          <img src='/Images/landing-image.jpg' alt='Thai dish' />
        </div>
        <About />
        
        {/* full image background, 'restaurant favourite' item in centered overlay
          Menu item, 
         (left) item image 
         (right) description
         (top right) price 
        */}

        {/* dark grey backdrop, menu on white overlay
          Full menu, description on top, spice/allergies on bottom 
          and main menu between on overlay
        */}

        {/* One last full screen image, thai culture image */}

        {/* Black background
          Contact
          Restaurant name, hours of operation
          credits
          - landing image Photo by Elli O. ( https://unsplash.com/@oelli ) on Unsplash

        */}
    </div>
);

export default DashboardPage;