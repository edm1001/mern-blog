import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto p-4 md:p-12 h-screen w-full bg-gray-900 text-gray-100 flex justify-center items-center">
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
            Welcome to LocalNews, your go-to platform for sharing and
            discovering local news and events. Our mission is to connect
            communities by providing a space where users can post updates,
            stories, and happenings from their neighborhoods. Whether it's a
            community event, a local news story, or an important announcement,
            LocalNews helps you stay informed and engaged with what's going on
            around you. Join us in building a vibrant, informed, and connected
            community. Our platform is user-friendly and open to everyone. Share
            your stories, read about others' experiences, and be a part of the
            local conversation.
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
            src="https://via.placeholder.com/500x400"
            alt="Local News"
            className="rounded-md shadow-lg border border-gray-800 max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
