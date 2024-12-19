import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="flex flex-col  justify-center items-center p-8 bg-dark-bg min-h-screen">
      <div className="w-full max-w-6xl">
        <motion.h1
          className="text-4xl font-bold text-left mb-8 text-dark-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="p-6 bg-dark-card shadow-md rounded-lg w-full md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-dark-text">
              Breaking News
            </h2>
            <p className="text-dark-secondary-text">
              Stay up-to-date with the latest breaking news in your area. Get
              updates on important events.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-dark-card shadow-md rounded-lg w-full md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-dark-text">
              Local Events
            </h2>
            <p className="text-dark-secondary-text">
              Find out about local events happening in your area. We cover
              everything from community gatherings to major city events.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="w-full max-w-6xl mt-12 p-6 bg-dark-button text-dark-text rounded-lg flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 md:mb-0">
          Want to stay updated with the latest news?
        </h2>
        <Link
          to="/blog"
          className="bg-dark-text text-dark-bg px-6 py-2 rounded-lg font-semibold shadow hover:bg-dark-secondary-text"
        >
          Visit Our Blog
        </Link>
      </motion.div>
    </div>
  );
}
