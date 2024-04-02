import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
return (
  <div className="bg-white rounded-lg flex hover:shadow-md">
    <div className="image">
      <Link to={`/post/${_id}`}>
        <img src={"http://localhost:4000/" + cover} alt="" className="rounded-lg" />
      </Link>
    </div>
    <div className="texts flex flex-col justify-between p-4">
      <Link to={`/post/${_id}`} className="text-blue-400 hover:text-blue-700">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      </Link>
      <p className="info text-sm text-gray-600">
        <a className="author text-gray-800 font-semibold hover:underline">
          {author.username}
        </a>
        <time className="ml-2">{formatISO9075(new Date(createdAt))}</time>
      </p>
      <p className="summary mt-2 text-gray-700">{summary}</p>
    </div>
  </div>
);

};

export default Post;
