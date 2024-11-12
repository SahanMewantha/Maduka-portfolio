import React from 'react';
import Image from 'next/image';

const Wedding = ({ sendSelectedAlbemData }) => {
  return (
    <>    
      {
        sendSelectedAlbemData && sendSelectedAlbemData.length > 0 ? (
          sendSelectedAlbemData.map((e, index) => {
            // Check if e.url exists before rendering the Image component
            console.log(e.url)
            return e.url ? (
              <Image
                key={index}
                src={e.url}
                className='overflow-hidden bg-indigo-500 rounded-lg shadow-lg opacity-75 shadow-indigo-500/50'
                alt="Description of the image"
                width={250} // Width of the image
                height={150} // Height of the image
                priority
              />
            ) : (
              <p key={index}>Unable to load images</p>
            );
          })
        ) : (
          <h1>Have no Images to display</h1>
        )
      }
    </>
  );
};

export default Wedding;
