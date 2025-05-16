// Education.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface EducationType {
  id: number;
  school: string;
  degree: string;
  start_year: number;
  end_year: number | null;
}

const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationType[]>([]);

  useEffect(() => {
    axios.get('/api/education/')
      .then(res => setEducation(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <ul className="space-y-2">
        {education.map(edu => (
          <li key={edu.id} className="text-gray-700 dark:text-gray-300">
            <strong>{edu.degree}</strong> at {edu.school} ({edu.start_year} - {edu.end_year || 'Present'})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;