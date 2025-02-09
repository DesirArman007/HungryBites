import React from 'react';
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';


function Footer() {
  const footerData = {
    quickLinks: ['Home', 'Menu', 'Reservations', 'About Us', 'Contact'],
    contact: {
      address: '123 Restaurant Street, City, State 12345',
      phone: '(123) 456-7890',
      email: 'info@restaurant.com',
    },
    openingHours: [
      { days: 'Monday - Friday', hours: '11am - 10pm' },
      { days: 'Saturday - Sunday', hours: '10am - 11pm' },
    ],
  };

  return (
    <div className="bg-orange-50 p-2 mt-6">

      <div className="flex flex-row justify-evenly gap-5 py-15 pl-18 items-start">

        <div className="flex-1 flex flex-col">
          <h3 className="text-md text-start font-semibold pb-2">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-sm text-start items-start justify-center">
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-md font-semibold text-start">Contact Us</h3>
          <div className='flex flex-col gap-1 items-start justify-center'>
            <p className="text-sm">{footerData.contact.address}</p>
            <p className="text-sm">Phone: {footerData.contact.phone}</p>
            <p className="text-sm">Email: {footerData.contact.email}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-md font-semibold text-center">Opening Hours</h3>
          <ul className="flex flex-col gap-1 text-sm item-start justify-center">
            {footerData.openingHours.map((item, index) => (
              <li key={index}>
                {item.days}: {item.hours}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 ">
          <h3 className="text-md font-semibold pb-2">Follow Us</h3>
          <div className="flex flex-row gap-2 items-center justify-center">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
            <img src={facebook} alt="Facebook" className="w-5 h-5" />
            <img src={twitter} alt="Twitter" className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-t border-gray-300">
        <p className="text-sm">© 2025 Your <span className='text-red-500 font-semibold'>HungryBites</span>. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
