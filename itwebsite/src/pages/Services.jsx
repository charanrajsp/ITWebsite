const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold">Our Services</h1>
      <p className="text-center">We provide innovative solutions to drive your business forward.</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <h3>🌍 Web Development</h3>
          <p>Modern, high-performance websites using React, Next.js, and Tailwind CSS.</p>
        </div>
        <div className="col-md-4">
          <h3>📱 Mobile App Development</h3>
          <p>Scalable and engaging iOS and Android apps built with React Native and Flutter.</p>
        </div>
        <div className="col-md-4">
          <h3>☁️ Cloud & DevOps</h3>
          <p>Secure and scalable cloud solutions on AWS, Azure, and Google Cloud.</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <h3>🤖 AI & Machine Learning</h3>
          <p>AI-powered solutions like chatbots, data analysis, and automation.</p>
        </div>
        <div className="col-md-4">
          <h3>🔒 Cybersecurity</h3>
          <p>Advanced threat protection with AI-based security solutions.</p>
        </div>
        <div className="col-md-4">
          <h3>📊 Data Analytics</h3>
          <p>Big data solutions for business intelligence and strategic insights.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
