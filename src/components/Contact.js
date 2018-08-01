import React from 'react';

export default () => (
  <div id='contact'>
    <div className='contact-details'>
      <div className='contact-title'>
        Thai Restaurant
      </div>
      <div className='contact-methods'>
        <div>
          Mailing Address
          <div className='contact-address'>
            <div>123 Fake Street</div>
            <div>Cityville</div>
            <div>ABC123</div>
          </div>
        </div>
        <div>
          Phone Number
          <div className='contact-phone'>
            (123) 456-7890
          </div>
          Email
          <div className='contact-method'>
            thai@thai.ca
          </div>
        </div>
      </div>
    </div>
    <div className='hours-of-operation'>
      <div className='contact-title'>
        HOURS OF OPERATION
      </div>
      <div>
        <div className='contact-hours'>
          <span>WEEKDAYS</span>
          <span>11:30AM - 10:00PM</span>
        </div>
        <div className='contact-hours'>
          <span>SATURDAY</span>
          <span>10:00AM - 11:00PM</span>
        </div>
        <div className='contact-hours'>
          <span>SUNDAY</span>
          <span>11:00AM - 9:00PM</span>
        </div>
      </div>
    </div>
  </div>
);