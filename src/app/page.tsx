import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Boost Your Business with Boostify Media
          </h1>
          <p className="text-lg mb-8">
            We specialize in social media advertising solutions for Facebook and Instagram, designed to drive results.
          </p>
          <Link href="/contact-us">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 text-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">About Boostify Media</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            At Boostify Media, we help businesses of all sizes enhance their online presence by providing top-notch social media advertising strategies. With a focus on creativity, analytics, and results, we’re here to help you grow.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-foreground">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Social Media Strategy</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We help you craft a tailored social media advertising strategy to achieve your marketing goals.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Facebook Ads</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Target the right audience with our expert Facebook ad management and optimization services.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg text-center">
              <h3 className="text-3xl font-semibold mb-4">Instagram Ads</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Boost your brand&apos;s presence on Instagram with ads designed to engage and convert.
              </p>
            </div>      
          </div>
        </div>
      </section>

     {/* Testimonials Section */}
<section className="bg-white dark:bg-gray-900 py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-bold mb-12 text-foreground">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-lg italic mb-4">
          "Boostify Media has been instrumental in helping our small business grow. Their strategies are top-notch!"
        </p>
        <h4 className="font-bold">- Rahul Verma, Founder of StartupX</h4>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-lg italic mb-4">
          "Their creative approach to social media ads helped us reach the right audience, and we’ve seen incredible results."
        </p>
        <h4 className="font-bold">- Neha Patil, CEO of Eco-Friendly Solutions</h4>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="text-lg italic mb-4">
          "Our revenue has significantly increased since we partnered with Boostify Media. They know how to deliver!"
        </p>
        <h4 className="font-bold">- Arjun Sharma, Owner of Tradewell Industries</h4>
      </div>
    </div>
  </div>
</section>


      {/* Case Studies Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-foreground">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Case Study #1</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn how we helped a local business increase their sales by 300% using targeted Facebook ads.
              </p>
              <Link href="/case-studies/1">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4">
                  Read More
                </button>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Case Study #2</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Discover how we helped a startup reduce their cost-per-lead by 50% with Instagram ad optimization.
              </p>
              <Link href="/case-studies/2">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-12">Our Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-lg mb-6">₹ 5000/month</p>
              <p className="text-lg mb-4">Perfect for small businesses looking to grow their social media presence.</p>
              <Link href="/checkout">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-lg mb-6">₹10000/month</p>
              <p className="text-lg mb-4">Designed for growing businesses ready to scale their social media advertising efforts.</p>
              <Link href="/checkout">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">Enterprise Plan</h3>
              <p className="text-lg mb-6">Custom Pricing</p>
              <p className="text-lg mb-4">Tailored solutions for large businesses with specific needs and goals.</p>
              <Link href="/contact-us">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Boost Your Social Media Presence?
          </h2>
          <p className="mb-8 text-lg">
            Contact us today and let’s get started on crafting the perfect social media advertising strategy for your business.
          </p>
          <Link href="/contact-us">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
