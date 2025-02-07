const Contact = () => {
    return (
      <div className="container my-5">
        <h1 className="text-center fw-bold">Contact Us</h1>
        <form className="w-50 mx-auto mt-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  