import React, { useState } from 'react';
import { makeup26 } from '../assets';

const InstagramModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    console.log('Toggling modal, isOpen:', !isOpen);
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={toggleModal}
        className="flex items-center gap-3 px-6 py-3 text-lg text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.542.07-2.969.375-4.09 1.496S1.43 4.194 1.36 5.736c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.07 1.542.375 2.969 1.496 4.09s2.548 1.426 4.09 1.496c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.542-.07 2.969-.375 4.09-1.496s1.426-2.548 1.496-4.09c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.07-1.542-.375-2.969-1.496-4.09s-2.548-1.426-4.09-1.496c-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
        Follow on Instagram
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          {/* Modal Content - Increased Size */}
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-8 md:w-2/3 lg:w-1/2">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Instagram Profile Card */}
            <div className="flex flex-col items-center">
              {/* Profile Picture - Increased Size */}
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                <img
                  src={makeup26}
                  alt="Makeup By Anchala"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Username - Increased Font Size */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">makeupbyanchala</h2>

              {/* Stats - Increased Font Size */}
              <div className="flex gap-8 my-6">
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-800">200</p>
                  <p className="text-sm text-gray-500">Posts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-800">45.6K</p>
                  <p className="text-sm text-gray-500">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg text-gray-800">320</p>
                  <p className="text-sm text-gray-500">Following</p>
                </div>
              </div>

              {/* Bio - Increased Font Size */}
              <p className="text-gray-600 text-center mb-6 text-base">
                Professional Makeup Artist 💄 and Educator | Bridal & Party Looks | Book your appointment today!
              </p>

              {/* Follow Button - Increased Size */}
              <a
                href="https://www.instagram.com/makeupbyanchala?igsh=NGpjbG1hc2w5MXR0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-lg"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramModal;