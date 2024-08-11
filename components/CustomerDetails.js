import React, { useState, useEffect, useRef } from 'react';
import './CustomerDetails.css';

const CustomerDetails = ({ customer }) => {
  const [photos, setPhotos] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (customer) {
      const fetchPhotos = async () => {
        try {
          const response = await fetch(
            'https://api.pexels.com/v1/search?query=nature&per_page=9',            {
              headers: {
                Authorization: '37T0fMbpvqoVALyQsCYdAQPuvJEAaz3u544u9pkgHcqsZDJdi1sujmyV',
              },
            }
          );
          const data = await response.json();
          if (data && data.photos) {
            const photoUrls = data.photos.map(photo => photo.src.medium);
            setPhotos(photoUrls);
          } else {
            console.error('Unexpected response structure:', data);
          }
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };

      fetchPhotos();

      
      intervalRef.current = setInterval(fetchPhotos, 10000);

      return () => clearInterval(intervalRef.current);
    }
  }, [customer]);

  if (!customer) {
    return <div className="customer-details">Select a customer to see details</div>;
  }

  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>Title: {customer.title}</p>
      <p>Address: {customer.address}</p>
      <div className="photo-grid">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Customer ${index + 1}`} />
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
