// AboutMe.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutMe: React.FC = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    axios.get('/api/about-me/')
      .then(res => {
        if (res.data.length > 0) {
          setAbout(res.data[0].content);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300">{about}</p>
    </div>
  );
};

export default AboutMe;