import React from 'react';

export default () => (
  <div id='about'>
    <div className='about-overlay content-container'>
      <div className='about-overlay-left'>
        <div>
          <div className='about-bio'>
            Vath Sin has been a chef for over 30 years, starting in Thailand in the early 80's, and 2001 he was able to open up his own restaurant in Canada. He named it after the famous Angkor Wat temple in his homeland of Cambodia.
          </div>
          <div className='about-chef'>
            <div>
              <h3>Head Chef</h3>
              <div className='about-chef-image'>
                <div className='chef-name'>Vath</div>
                <img src='/Images/chef-profile.png' alt='head-chef' />
                <div className='chef-name'>Sin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='about-overlay-right'>
        <img src='/Images/quad-plates.jpg' alt='four dishes at the restaurant' />
      </div>
    </div>
    <div className='about-awards content-container'>Royal Angkor has received nation wide recognition and has been voted among the Top 500 BEST Restaurants in the country by 'Where to Eat in Canada'.</div>
  </div>
);