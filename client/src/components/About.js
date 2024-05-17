import React from "react";

export default function About() {
  return (
    <div className="container p-12 h-screen w-screen text-gray-100">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4 text-white">About Us</h1>
          <p className="mb-4 text-dark-text text-xs">
          Welcome to LocalNews, your go-to platform for sharing and discovering local news and events. Our mission is to connect communities by providing a space where users can post updates, stories, and happenings from their neighborhoods. Whether it's a community event, a local news story, or an important announcement, LocalNews helps you stay informed and engaged with what's going on around you. Join us in building a vibrant, informed, and connected community. Our platform is user-friendly and open to everyone. Share your stories, read about others' experiences, and be a part of the local conversation.
          </p>
        </div>
        <div className="md:w-1/2 p-4 mb-5 ">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Local News"
            className="rounded-md shadow-lg border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
