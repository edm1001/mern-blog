import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="flex flex-col items-center p-6 bg-dark-bg min-h-screen">
          <div className="w-full max-w-6xl">
            <h1 className="text-4xl font-bold text-left mb-8 text-dark-text">Our Services</h1>
            <div className="flex flex-col md:flex-row gap-8">
          <div className="p-6 bg-dark-card shadow-md rounded-lg w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-dark-text">Breaking News</h2>
            <p className="text-dark-secondary-text">
              Stay up-to-date with the latest breaking news in your area. Get updates on important events.
            </p>
          </div>
          <div className="p-6 bg-dark-card shadow-md rounded-lg w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-dark-text">Local Events</h2>
            <p className="text-dark-secondary-text">
              Find out about local events happening in your area. We cover everything from community gatherings to major city events.
            </p>
          </div>
        </div>
          </div>
          <div className="w-full max-w-6xl mt-12 p-6 bg-dark-button text-dark-text rounded-lg flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4 md:mb-0">Want to stay updated with the latest news?</h2>
            <Link to="/blog" className="bg-dark-text text-dark-bg px-6 py-2 rounded-lg font-semibold shadow hover:bg-dark-secondary-text">
              Visit Our Blog
            </Link>
          </div>
        </div>
      );
}
