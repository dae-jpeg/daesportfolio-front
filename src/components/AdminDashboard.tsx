import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/projects/")
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteProject = async (id: number) => {
    await axios.delete(`http://localhost:8000/api/projects/${id}/`);
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button onClick={() => deleteProject(project.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
