import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

// add location parameter
const Post = ({ _id, title, summary, cover, createdAt, author, location }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 hover:ring-8 cursor-pointer hover:scale-105 transition duration-200">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img
            src={"http://localhost:4000/" + cover}
            alt=""
            className="rounded-lg"
          />
        </Link>
      </div>
      <div className="texts flex flex-col justify-between p-4">
        <Link to={`/post/${_id}`}>
          <h2 className="text-xl font-semibold mb-2 text-blue-400 hover:text-blue-700">
            {title}
          </h2>
        </Link>
        <p className="info text-sm text-gray-600 hover:text-lightgray">
          <p>{location}</p>
          <p className="author text-gray-500 font-semibold hover:underline">
            {author.username}
          </p>
          <time className="ml-2 text-gray-400">
            {formatISO9075(new Date(createdAt))}
          </time>
        </p>
        <p className="summary mt-2 text-gray-500">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
