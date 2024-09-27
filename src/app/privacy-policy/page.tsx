import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how Boostify Media collects, uses, and protects your personal information when you use our digital services for social media advertising and marketing.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Your name and contact information (email address, phone number)</li>
        <li>Your business information (company name, website, industry)</li>
        <li>Your social media accounts and advertising preferences</li>
        <li>Your interactions with our website and marketing materials</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Provide and improve our digital services</li>
        <li>Deliver targeted advertising campaigns on social media platforms</li>
        <li>Communicate with you about our services and promotions</li>
        <li>Analyze your preferences and interests to personalize your experience</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Social media platforms for advertising purposes</li>
        <li>Our trusted partners and service providers who assist with our operations</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Access your personal information</li>
        <li>Correct inaccuracies in your personal information</li>
        <li>Request deletion of your personal information</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  );
};

export default PrivacyPolicy;
