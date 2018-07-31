import React from 'react';

{/* white backdrop
  About
  (top left) small story,
  (bottom left) picture of chef,
  (right) four separate images spaced in square
*/}

export default () => (
  <div className='about'>
    <div className='about-overlay'>
      <div className='about-overlay-left'>
        <div className='about-bio'>
          Vath Sin has been a chef for over 30 years. He lived in Thailand in the early 80's and owned a small restaurant which specialized in Cambodian soups and Thai curries. In 1985 he moved to Canada and worked in the food service industry until he was able to open up his own restaurant in 2001. He named it after the famous Angkor Wat temple in his homeland of Cambodia. Today Royal Angkor has received nation wide recognition and has been voted among the Top 500 BEST Restaurants in the country by ''Where to Eat in Canada''.
        </div>
        <div className='about-chef'>
          <h3>Head Chef</h3>
          <div className='about-chef-image'>
            <div>
              <div className='chef-name'>Vath</div>
              <img src='' alt='head-chef' />
              <div className='chef-name'>Sin</div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-overlay-right'>
        <img src='/Images/quad-plates.jpg' alt='four dishes at the restaurant' />
      </div>
    </div>
  </div>
);