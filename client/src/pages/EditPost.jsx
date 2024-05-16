import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../Editor";

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/post/" + id).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.titile);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("location", setLocation);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "PUT",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <div className="post-form bg-gray-400">
    <form onSubmit={updatePost} className=" mx-auto mt-8 p-4 bg-white rounded-lg">
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
        className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <input 
        type="location"
        placeholder="Location"
        className="block w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        onChange={(ev) => setLocation(ev.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
        className="block w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <input type="file" onChange={(ev) => setFiles(ev.target.files)} className="mt-4" />
      <Editor value={content} onChange={setContent} className="mt-4" />
      <button
        type="submit"
        className="mt-8 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md border-2 border-indigo-500 hover:bg-white hover:text-indigo-500 "
      >
        Update Post
      </button>
    </form>
    </div>
  );
  
}

export default EditPost;
