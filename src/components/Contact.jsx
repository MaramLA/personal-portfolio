import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading" id="contactHeading">
        Contact <span>Me</span>
      </h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/xoqgdopq"
        method="POST"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
