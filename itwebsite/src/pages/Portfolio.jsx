import React from "react";

const Portfolio = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold">Our Portfolio</h1>
      <p className="text-center text-muted">Check out our latest projects and future innovations.</p>

      {/* Completed Projects Section */}
      <section className="mt-5">
        <h2 className="text-center fw-semibold">Completed Projects</h2>
        <div className="row mt-4">
          {completedProjects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-lg">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <span className="badge bg-primary">{project.technology}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="mt-5">
        <h2 className="text-center fw-semibold">Upcoming Projects</h2>
        <div className="row mt-4">
          {futureProjects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-lg border-warning">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <span className="badge bg-warning">{project.technology}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Used Section */}
      <section className="mt-5">
        <h2 className="text-center fw-semibold">Technologies We Use</h2>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge bg-success mx-2 my-1 p-2 fs-6 text-decoration-none"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

// Dummy Data for Completed Projects
const completedProjects = [
  {
    title: "E-Commerce Platform",
    description: "A robust online store for various products with secure payment integration.",
    technology: "React, Node.js, MongoDB",
    image: "/images/Ecom.webp"
  },
  {
    title: "AI-Powered Chatbot",
    description: "A smart chatbot integrated into websites for customer support.",
    technology: "Python, TensorFlow, React",
    image: "/images/cb.jpeg"
  },
  {
    title: "Healthcare Management System",
    description: "A cloud-based system to manage patient records and appointments.",
    technology: "Angular, Firebase, Express.js",
    image: "/images/hc.jpg"
  }
];

// Dummy Data for Future Projects
const futureProjects = [
  {
    title: "Metaverse Shopping",
    description: "An immersive shopping experience using VR and AI.",
    technology: "Unity, Web3, AI"
  },
  {
    title: "AI-Powered Resume Builder",
    description: "A tool that automatically generates professional resumes.",
    technology: "Next.js, OpenAI API"
  },
  {
    title: "Automated Cybersecurity System",
    description: "A self-learning AI to detect and prevent cyber threats.",
    technology: "Python, Machine Learning, Blockchain"
  }
];

// Technologies We Use
const technologies = [
  { name: "React", link: "https://react.dev/" },
  { name: "Next.js", link: "https://nextjs.org/" },
  { name: "Angular", link: "https://angular.io/" },
  { name: "Node.js", link: "https://nodejs.org/" },
  { name: "MongoDB", link: "https://www.mongodb.com/" },
  { name: "Python", link: "https://www.python.org/" },
  { name: "TensorFlow", link: "https://www.tensorflow.org/" },
  { name: "Web3", link: "https://web3.foundation/" },
  { name: "Blockchain", link: "https://ethereum.org/en/developers/" }
];

export default Portfolio;
