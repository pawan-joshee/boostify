import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        If you have any questions or inquiries, please feel free to contact us.
      </p>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-lg">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-lg">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-lg">Message:</label>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 rounded-md px-4 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md px-6 py-3 hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
