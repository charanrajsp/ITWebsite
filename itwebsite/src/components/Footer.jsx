import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        {/* Logo & Company Name */}
        <h3 className="fw-bold mb-3">IT Company</h3>

        {/* Social Media Links */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-0">&copy; {new Date().getFullYear()} IT Company. All rights reserved.</p>
      </div>

      {/* Smooth Animation */}
      <style jsx>{`
        .social-icon {
          color: white;
          transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
        }
        .social-icon:hover {
          transform: scale(1.2);
          color: #0d6efd;
        }
        footer {
          animation: fadeInUp 1s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
