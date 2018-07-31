import React from 'react';


{/* Black background
  Contact
  Restaurant name, hours of operation
*/}


export default () => (
  <div id='contact'>
    <div id='contact-address'>
      <div className='contact-header'>
        Restaurant Name
      </div>
      <div className='contact-contents'>
        Restaurant Address
      </div>
      <div className='contact-contents'>
        Restaurant City
      </div>
      <div className='contact-contents'>
        Restaurant Postal/Zip Code
      </div>
    </div>
    <div id='hours-of-operation'>
      <div className='contact-header'>
        HOURS OF OPERATION
      </div>
      <div>
        <div className='contact-header'>
          MONDAY - FRIDAY
        </div>
        <span className='contact-contents'>
          11:30AM - 3:00PM,
        </span>
        <span className='contact-contents'>
          5:00 - 9:00PM
        </span>
        <div className='contact-header'>
          SATURDAY
        </div>
        <span className='contact-contents'>
          4:00 - 9:00PM
        </span>
        <div className='contact-header'>
          SUNDAY
        </div>
        <span className='contact-contents'>
          CLOSED
        </span>
      </div>
    </div>
    <div id='contact-phone'>
      Restaurant phone number
    </div>
  </div>
);