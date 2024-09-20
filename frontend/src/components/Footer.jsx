import { BsInstagram, BsTwitterX } from "react-icons/bs";
import NewsletterForm from "./NewsletterForm"; // Adjust the path accordingly
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Eco-Mart</h4>
            <p className="text-gray-600">
              Your one-stop shop for eco-friendly products. Discover sustainable
              choices for a better planet.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600">
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-green-600"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-green-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <BsTwitterX className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600">
                <BsInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h4>
          <NewsletterForm />
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Eco-Mart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
