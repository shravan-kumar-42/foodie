function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* CONTACT INFORMATION */}

        <div className="contact-info">

          <p className="section-label">
            CONTACT US
          </p>

          <h2>
            Get In Touch 📞
          </h2>

          <p>
            Have a question or need help?
            Feel free to contact us.
          </p>


          <div className="contact-details">

            <div className="contact-item">

              <span>📍</span>

              <div>
                <h3>
                  Address
                </h3>

                <p>
                  Bengaluru, Karnataka, India
                </p>
              </div>

            </div>


            <div className="contact-item">

              <span>📞</span>

              <div>
                <h3>
                  Phone
                </h3>

                <p>
                  +91 98765 43210
                </p>
              </div>

            </div>


            <div className="contact-item">

              <span>📧</span>

              <div>
                <h3>
                  Email
                </h3>

                <p>
                  foodie@example.com
                </p>
              </div>

            </div>


            <div className="contact-item">

              <span>🕐</span>

              <div>
                <h3>
                  Opening Hours
                </h3>

                <p>
                  Monday - Sunday
                  <br />
                  10:00 AM - 10:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* CONTACT FORM */}

        <div className="contact-form">

          <h2>
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;