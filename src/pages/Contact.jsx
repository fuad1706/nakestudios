import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-48 py-12">
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 leading-snug">
          We are Open
          <br />
          to Work with You.
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-base md:text-lg text-gray-700 mb-1"
          >
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
          <label
            htmlFor="email"
            className="block text-base md:text-lg text-gray-700 mb-1"
          >
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
          <label
            htmlFor="subject"
            className="block text-base md:text-lg text-gray-700 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter the subject"
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-base md:text-lg text-gray-700 mb-1"
          >
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
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>

        {/* Contact Info */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-700">enquiry.nakestudios@gmail.com</p>
          <p className="text-gray-700">info@nakestudios.org</p>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img
          src="/images/contacts_img_camera.png"
          alt="Camera"
          className="w-full h-auto object-contain rounded-md"
        />
      </div>
    </div>
  );
};

export default Contact;
