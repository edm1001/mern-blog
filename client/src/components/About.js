import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" mx-auto p-4 md:p-12 min-h-screen w-full bg-gray-900 text-gray-100 flex justify-center items-center" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl w-full">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="mb-2 text-gray-300 text-sm md:text-base leading-relaxed">
          Welcome to HeadlineHub, your platform for sharing and discovering news and events. Stay informed about community happenings, from events and stories to important announcements. Join us to connect, share, and engage with people today!
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 p-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Local News"
            className="rounded-md shadow-lg border border-gray-800 max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
