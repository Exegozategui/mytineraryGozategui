import React from 'react';

function index({ data }) {
  return (
    <div className="itinerary-card">
      <h3>{data.name}</h3>
      <p>Price: ${data.price}</p>
      <p>Duration: {data.duration} hours</p>
      <p>Likes: {data.likes}</p>
      <p>Hashtags: {data.hashtags}</p>
      <p>Comments: {data.comments}</p>
    </div>
  );
}

export default index;
