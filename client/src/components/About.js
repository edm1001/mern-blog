import React from "react";

export default function About() {
  return (
    <div className="container mx-auto p-4 bg-gray-900 text-gray-100">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
          <p className="mb-4 text-gray-300 text-sm">
          Welcome to LocalNews, your go-to platform for sharing and discovering local news and events. Our mission is to connect communities by providing a space where users can post updates, stories, and happenings from their neighborhoods. Whether it's a community event, a local news story, or an important announcement, LocalNews helps you stay informed and engaged with what's going on around you. Join us in building a vibrant, informed, and connected community. Our platform is user-friendly and open to everyone. Share your stories, read about others' experiences, and be a part of the local conversation.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Local News"
            className="rounded-lg shadow-lg border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
