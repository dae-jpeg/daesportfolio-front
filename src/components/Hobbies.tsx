// Hobbies.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Hobby {
  id: number;
  name: string;
  icon: string;
}

const Hobbies: React.FC = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    axios.get('/api/hobbies/')
      .then(res => setHobbies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">Hobbies</h2>
      <ul className="flex flex-wrap gap-2">
        {hobbies.map(hobby => (
          <li key={hobby.id} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white">
            {hobby.icon ? `${hobby.icon} ` : ''}{hobby.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;