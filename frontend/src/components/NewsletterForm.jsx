import { useState } from "react";
import axiosInstance from "../lib/axios";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/newsletter/subscribe", { email });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-2 py-1 lg:px-4 lg:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-2 py-1 lg:px-4 lg:py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
