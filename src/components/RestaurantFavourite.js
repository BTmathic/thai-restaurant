import React from 'react';

export default () => (
  <div className='restaurant-favourite'>
    <div className='restaurant-fav-overlay content-container'>
      <div className='restaurant-fav-title'>
        Voted best
      </div>
      <div className='restaurant-fav-overlay-contents'>
        <div className='fav-dish'></div>
        <div className='restaurant-fav'>
          <div className='restaurant-fav-contents'>
            <h4>Fancy noodle dish</h4>
            <p>Something something, with a something something and a hint of something to make an aromatic and flavourful combination known all throughout the country</p>
            {/* make fav three course/catering, then carousel appy, main and desert? */}
          </div>
        </div>
      </div>
      {/*
      <div className='restaurant-fav-source'>
        As voted in Food magazine
      </div>
      */}
      <div className='restaurant-fav-price'>
        $14.99
      </div>
    </div>
  </div>
);