import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author, location }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 hover:ring-8 cursor-pointer hover:scale-105 transition duration-200">
      <Link to={`/post/${_id}`}>
        <div className={`image ${!cover ? " h-48 bg-gray-200" : ""}`}>
          {cover ? (
            <img
              src={"http://localhost:4000/" + cover}
              alt={title}
              className="rounded-lg w-full h-full object-cover"
            />
          ) : (
            <div className="flex justify-center items-center h-full text-gray-500">
              No Image
            </div>
          )}
        </div>
        <div className="texts flex flex-col justify-between p-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-400 hover:text-blue-700">
            {title}
          </h2>

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
      </Link>
    </div>
  );
};


export default Post;
