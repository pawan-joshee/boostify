import "./globals.css";
import Header from "./Header"; // Client-side Header component
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Boostify Media",
  description: "Social Media Advertising Solutions for Businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Ensure Header is client-side */}
        <Header /> {/* Client-side Header */}
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12 mt-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Company Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Boostify Media</h3>
              <p className="text-gray-400">
                Social Media Advertising Solutions for Businesses
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="hover:underline text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:underline text-gray-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline text-gray-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.instagram.com/pawanjoshee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a
                  href="https://www.facebook.com/pawanjoshee.patamdesar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Boostify Media. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
