"use client";

import React, { useState } from "react";
import { db } from "../../../firebaseConfig"; // Adjust the path according to your project structure
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden honeypot field for spam prevention
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  // Validation
  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError(null); // Reset error if form is valid
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Prevent submission if honeypot field is filled (basic spam prevention)
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });
      setSuccess(true); // Set success state to true
    } catch (error) {
      console.log(error)
      setError("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="mb-6 text-gray-400">
        If you have any questions or inquiries, please feel free to contact us.
      </p>

      {/* Show success message after form submission */}
      {success ? (
        <div className="text-green-500 text-lg">
          <h2>Thank you for contacting us!</h2>
          <p>We have received your message and will get back to you shortly.</p>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-lg text-white">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-white bg-black"
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-lg text-white">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-white bg-black"
              disabled={isSubmitting}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-lg text-white">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-white bg-black"
              disabled={isSubmitting}
              required
            ></textarea>
          </div>

          {/* Honeypot field for spam prevention */}
          <div className="hidden">
            <label htmlFor="honeypot">Leave this field empty</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`bg-blue-600 text-white rounded-md px-6 py-3 hover:bg-blue-700 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
