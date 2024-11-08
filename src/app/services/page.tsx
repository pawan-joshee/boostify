import React from "react";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-lg mb-8">
            Boostify Media offers top-tier social media advertising services designed to drive your business growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Social Media Strategy</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                We craft comprehensive social media strategies tailored to your business goals, ensuring effective results.
              </p>
              <Link href="/contact-us">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Facebook Ads</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Reach the right audience with optimized Facebook ad campaigns, crafted to deliver results.
              </p>
              <Link href="/contact-us">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Instagram Ads</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Boost engagement on Instagram with ads designed to capture attention and convert followers into customers.
              </p>
              <Link href="/contact-us">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Why Choose Boostify Media?</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
            At Boostify Media, we specialize in driving social media advertising results that grow your business. Our
            services are designed with your success in mind, using data-driven strategies and creative approaches to ensure 
            your brand gets noticed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Creative Expertise</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our team brings innovative and creative solutions that make your business stand out on social media.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Results-Driven</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We focus on delivering measurable outcomes, ensuring you get the best ROI on your ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
          <p className="mb-8 text-lg">
            Let’s work together to build a social media advertising strategy that drives results. Contact us today to get started.
          </p>
          <Link href="/contact-us">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 text-lg">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
