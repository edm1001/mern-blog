import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("location", location);
    data.set("file", files[0]);
    ev.preventDefault();

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={createNewPost}
          className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Create a New Post
          </h2>

          {/* Title Input */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Summary Input */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="summary">
              Subject & Date
            </label>
            <input
              id="summary"
              type="text"
              placeholder="Subject & Date"
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(ev) => setLocation(ev.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* File Input */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="file">
              Upload Image
            </label>
            <input
              id="file"
              type="file"
              onChange={(ev) => setFiles(ev.target.files)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Editor */}
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="content">
              Content
            </label>
            <Editor value={content} onChange={setContent} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 transition duration-200"
          >
            Create Post!
          </button>
        </form>
      </main>
    </div>
  );
}

export default CreatePost;
