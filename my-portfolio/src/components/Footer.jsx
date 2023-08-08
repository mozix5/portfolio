import React from "react";
function Footer() {
  const styles = { borderBottom: "3px solid #126bf0" };
  return (
    <section id="contact-form">
      <form action="https://formspree.io/f/moqoevpk" method="POST">
        <div className="contact-left">
          <h1 className="c-l-heading">
            <span style={styles}>Writ</span>e me
          </h1>

          <div className="f-name">
            <font>Name</font>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="f-email">
            <font>Email</font>
            <input type="email" placeholder="Example@gmail.com" />
          </div>
        </div>

        <div className="contact-right">
          <div className="message">
            <font>Message</font>
            <textarea
              name="message"
              rows="5"
              cols="20"
              placeholder="Write Message..."
            ></textarea>
          </div>

          <button>submit</button>
        </div>
      </form>
    </section>
  );
}

export default Footer;
