import React, { useState } from 'react';
import './App.css';

const stringsList = [
  "Mr. & Mrs. Mahi",
  "Bad Boys Ride or Die",
  "Inside Out 2",  
  "Srikanth",  
  "Rockstar",  
];

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');

  const generateRandomString = () => {
    const randomIndex = Math.floor(Math.random() * stringsList.length);
    setRandomString(stringsList[randomIndex]);
  };

  return (
    <div className="container">
      <h1>✨ Hi Akshata ✨</h1>
      <p>{randomString}</p>
      <button className="round-button" onClick={generateRandomString}>Click it and Choose a movie</button>
    </div>
  );
};

export default RandomStringGenerator;
