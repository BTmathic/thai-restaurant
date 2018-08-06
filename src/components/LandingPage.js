import React from 'react';
import Menu from './Menu';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import RestaurantFavourite from './RestaurantFavourite';

export default () => (
    <div>
      <Header />
      <div className='landing-image'>
        <img src='/Images/royal-angkor.jpg' alt='restaurant logo' />
      </div>
      <About />
      <RestaurantFavourite />
      <Menu />
      <div className='angkor-temples-image'></div>
      {/* Maybe a small overlay about This culture/cuisine? */}
      {/* Lunch specials? Call ahead, ready in 10 minutes, three most popular options? */}
      <Contact />
      {/* credits
        - landing image Photo by Elli O. ( https://unsplash.com/@oelli ) on Unsplash
        - restaurant fav backdrop image Photo by Monika Grabkowska ( https://unsplash.com/@moniqa ) on Unsplash
        - restaurant fav image Photo by Carissa Gan ( https://unsplash.com/@carissagan ) on Unsplash
        - spices image Photo by Baehaki Hariri ( https://unsplash.com/@baehaki ) on Unsplash
        - chef image Photo by Benjamin Parker ( https://unsplash.com/@brokenlenscap ) on Unsplash
      */}
    </div>
);