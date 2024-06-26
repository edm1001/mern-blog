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
    <div className="w-screen h-screen post-form ">
    <form onSubmit={createNewPost}>
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder="Subject & Date"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
       <input 
        type="location"
        placeholder="Location"
        className="block w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        value={location}
        onChange={(ev) => setLocation(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
      <Editor value={content} onChange={setContent} />
      <button className="bg-dark-button p-3 rounded-md" style={{ marginTop: "8px" }}>Create Post!</button>
    </form>
    </ div>
  );
}

export default CreatePost;
