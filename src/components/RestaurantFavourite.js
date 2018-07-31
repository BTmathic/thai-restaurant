import React from 'react';


{/* full image background, 'restaurant favourite' item in centered overlay
  Menu item, 
  (left) item image 
  (right) description
  (top right) price 
*/}


export default () => (
  <div className='restaurant-favourite'>
    {/*<img src='/Images/restaurant-fav-backdrop.jpg' alt='table with basil leaves' />*/}
    <div className='restaurant-fav-overlay'>
      <div className='restaurant-fav-overlay-contents'>
        <div className='fav-dish'></div>
        {/*<img src='/Images/restaurant-fav.jpg' alt='restaurant favourite dish' />*/}
        <div className='restaurant-fav'>
          <h2>Dish title</h2>
          <p>Dish description</p>
          {/* make fav three course, then carousel appy, main and desert? */}
        </div>
      </div>
      <div className='restaurant-fav-price'>
        $14.99
      </div>
    </div>
  </div>
);