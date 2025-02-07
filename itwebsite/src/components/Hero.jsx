const Hero = () => {
  return (
    <div className="container text-center my-5">
    <div className="row align-items-center">
      {/* Left Side - Text Content */}
      <div className="col-md-6 text-md-start">
        <h1 className="display-4 fw-bold">Empowering Businesses with Technology</h1>
        <p className="lead text-muted">
          We craft innovative solutions in web development, AI, and cloud computing to elevate your business.
        </p>
        <div className="d-flex justify-content-md-start justify-content-center gap-3">
          <a href="/services" className="btn btn-primary">Explore Services</a>
          <a href="/contact" className="btn btn-outline-dark">Get in Touch</a>
        </div>
      </div>
        <div className="col-md-6">
          <img src="/images/4k-tech.webp" className="img-fluid rounded" alt="Hero" />
        </div>
        <div className="row-md-4" style={{ backgroundColor: 'lightblue', color: 'darkblue', borderRadius: '8px'}}>
          <h3>🚀 Fast & Scalable Solutions</h3>
          <p>We build high-performance applications optimized for growth.</p>
        </div>
        <div className="row-md-5" style={{ backgroundColor: 'lightblue', color: 'darkblue',padding: '15px', borderRadius: '8px'}}>
          <h3>🔗 AI & Blockchain Integration</h3>
          <p>Innovating with AI-powered automation and secure blockchain systems.</p>
        </div>
        <div className="row-md-6"style={{ backgroundColor: 'lightblue', color: 'darkblue', borderRadius: '8px'}}>
          <h3>☁️ Cloud-Powered Infrastructure</h3>
          <p>Leveraging AWS, Azure, and GCP for unmatched scalability.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
