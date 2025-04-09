import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Section: Form */}
      <div className="md:w-[45%]">
        <h2 className="text-3xl font-semibold mb-6">
          We are Open
          <br />
          to Work with You.
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg text-gray-700">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter the subject"
          />
        </div>

        {/* Message Input (Text Area) */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg text-gray-700">
            Your Message (Optional)
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Type your message"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Send Message
        </button>
        <h3>Contact US</h3>
        <p>enquiry.nakestudios@gmail.com</p>
        <p>info@nakestudios.org</p>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-[45%]">
        <img
          src="/images/contacts_img_camera.png"
          alt="Camera"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Contact;
