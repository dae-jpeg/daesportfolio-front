import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

const ProjectsGrid = ({ projects = [] }: ProjectsGridProps) => {
  // Default projects if none are provided
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "CheckInGo",
      description:
        "A Progressive Web App for Smart Hotel Management",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    },
    {
      id: "2",
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with transaction history.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description:
        "Personal portfolio website with smooth animations and responsive design.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
    },
    {
      id: "4",
      title: "Fitness Tracker",
      description:
        "Track your workouts and monitor your progress with this fitness application.",
      category: "mobile",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
    },
    {
      id: "5",
      title: "Restaurant Booking System",
      description:
        "Online reservation system for restaurants with table management.",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    },
    {
      id: "6",
      title: "Travel Blog",
      description: "A travel blog with interactive maps and photo galleries.",
      category: "design",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // State for category filtering
  const [activeFilter, setActiveFilter] = useState("all");

  // Get unique categories from projects
  const categories = [
    "all",
    ...new Set(displayProjects.map((project) => project.category)),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === "all"
      ? displayProjects
      : displayProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-background py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work across various domains and technologies.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
