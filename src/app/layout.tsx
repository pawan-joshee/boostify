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
        <footer className="bg-gray-900 text-white py-6 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Boostify Media. All rights reserved.</p>
            <p className="mt-2">
              Follow us on{" "}
              <a
                href="https://www.instagram.com/boostifymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://www.facebook.com/boostifymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Facebook
              </a>
              , and other social platforms.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
