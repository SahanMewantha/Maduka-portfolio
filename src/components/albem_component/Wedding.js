/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

const Wedding = ({ sendSelectedAlbemData }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedImage, setSelectedImage] = useState(null);
      
        // Function to open modal
        const openModal = (imageUrl) => {
          setSelectedImage(imageUrl);
          setIsOpen(true);
        };
      
        // Function to close modal
        const closeModal = () => {
          setIsOpen(false);
          setSelectedImage(null);
        };

  return (
    <>    
        
      {
        <div className="p-4 mx-16 my-10 lg:mt-12 xl:mt-10 md:mt-28 ">
        {sendSelectedAlbemData && sendSelectedAlbemData.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {sendSelectedAlbemData.slice(0, 50).map((e, index) => (
              e.url ? (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                  onClick={() => openModal(e.url)}
                >
                  <Image
                    src={e.url}
                    alt={`Gallery image ${index + 1}`}
                    width={250}
                    height={150}
                    className="object-cover w-full transition-transform duration-300 h-52 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-25"></div>
                </div>
              ) : (
                <p key={index}>Unable to load image</p>
              )
            ))}
          </div>
        ) : (
          <h1 className="text-xl font-semibold text-center">No Images to Display</h1>
        )}
  
        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-screen rounded-lg"
              />
              <span
                className="absolute text-3xl text-white cursor-pointer top-2 right-2"
                onClick={closeModal}
              >
                &times;
              </span>
            </div>
          </div>
        )}
      </div>
}
    </>
  );
};

export default Wedding;
