import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import ContactForm from "./ContactForm";
import AboutMeSection from "./AboutMe";
import EducationSection from "./Education";
import HobbiesSection from "./Hobbies";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [pages, setPages] = useState([]);  // Fetching pages instead of a single message

  useEffect(() => {
    axios.get("/api/pages/")   // Connects to Django API
      .then(response => setPages(response.data.pages))
      .catch(error => console.error("Error fetching API:", error));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">DAEHX</div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection("hero")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About Me
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("education")}>
              Education
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("hobbies")}>
              Hobbies
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b py-4"
          >
            <nav className="flex flex-col space-y-2 px-4">
              <Button variant="ghost" onClick={() => scrollToSection("hero")}>
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("skills")}>
                Skills
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
              >
                About Me
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("education")}
              >
                Education
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("hobbies")}
              >
                Hobbies
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-background/95"
      >
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello! I'm Dylan Ranola
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              Computer Engineer / WebDeveloper / Designer / Gamer
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="rounded-full px-8"
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("projects")}
              className="animate-bounce rounded-full"
            >
              <ArrowDown />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work across web development, design, and
              creative coding.
            </p>
          </motion.div>

          <ProjectsGrid />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit and professional capabilities that I bring to
              every project.
            </p>
          </motion.div>

          <SkillsSection />
        </div>
      </section>


{/* About Me Section */}
<section id="about" className="py-20 bg-muted/10">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Enthusiastic and detail-oriented Computer Engineering student with a strong foundation in networking, embedded systems, and software development. Currently expanding knowledge in cybersecurity, aiming to apply analytical and problem-solving skills in security-related roles.
      </p>
    </motion.div>
    <AboutMeSection />
  </div>
</section>


{/* Education Section */}
<section id="education" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A quick overview of my academic journey and qualifications.
      </p>
    </motion.div>
    <EducationSection />
  </div>
</section>

{/* Hobbies Section */}
<section id="hobbies" className="py-20 bg-muted/10">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Hobbies</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Here’s what I enjoy doing when I’m not coding or designing.
      </p>
    </motion.div>
    <HobbiesSection />
  </div>
</section>

{/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Send me a message
              and let's create something amazing together.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Dae's Portfolio. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com/s4mdae"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://github.com/dae-jpeg"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dylan-ra%C3%B1ola-b142b7278/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/daeone.jpeg/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
