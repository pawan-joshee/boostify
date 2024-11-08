import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            About Boostify Media
          </h1>
          <p className="text-lg mb-8">
            Your Partner in Social Media Advertising Success
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Our Story</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Founded in 2023, Boostify Media started with a simple mission: to help businesses 
            of all sizes grow and thrive in the digital world. Today, we are a provider of social 
            media advertising solutions with a focus on creativity, strategy, and measurable results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            At Boostify Media, our mission is simple: to empower businesses with innovative social media advertising strategies 
            that deliver real results. Whether it’s boosting brand awareness or driving targeted conversions, 
            we are committed to helping our clients succeed in the digital landscape.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Creativity</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe in the power of creativity to drive impactful social media campaigns.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Results-Oriented</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything we do is geared toward delivering measurable, actionable results for our clients.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Integrity</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We value transparency, honesty, and accountability in all our business dealings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Pawan Kumar</h3>
              <p className="text-lg">CEO & Founder</p>
              <p className="text-gray-600 dark:text-gray-300">
                With a passion for digital marketing, Pawan Kumar our team with over a decade of industry experience.
              </p>
            </div>
            <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Sushmita Saran</h3>
              <p className="text-lg">Head of Strategy</p>
              <p className="text-gray-600 dark:text-gray-300">
              Sushmita is responsible for crafting winning strategies that deliver exceptional results for our clients.
              </p>
            </div>
            <div className="p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Emilal</h3>
              <p className="text-lg">Creative Director</p>
              <p className="text-gray-600 dark:text-gray-300">
                Emilal&apos;s creativity and vision help our clients stand out in the crowded digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">Want to Know More About Us?</h2>
          <p className="mb-8 text-lg">
            We’re here to answer any questions you have about our services or how we can help your business grow.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 text-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
