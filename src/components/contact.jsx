import "../styles/contact.css";
function Contact() {
  return (
    <>
      <div>
        <h1 className="form-title">Contact Us</h1>
        <form>
          <div className="names">
            <label htmlFor="firstName">FirstName: </label>
            <input type="text" id="firstName" name="firstName" required />
            <label htmlFor="lastName">LastName: </label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="remaining-inputs">
            <div className="email-div">
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Message: </label>
              <textarea placeholder="Enter your message here ..." />
            </div>

            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
