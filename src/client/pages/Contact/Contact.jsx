import MasterLayout from "../../layouts/MasterLayout";

const Contact = () => {
  return (
    <>
      <MasterLayout>
        <main
          style={{
            marginTop: "80px",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "2rem",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Contact Us
          </h1>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Other Ways to Reach Us</h3>
            <p>
              <strong>Email:</strong> info@newshub.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 News Street, Journalism City, JC
              12345
            </p>
          </div>
        </main>
      </MasterLayout>
    </>
  );
};

export default Contact;
