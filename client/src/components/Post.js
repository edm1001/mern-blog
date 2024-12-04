import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, cover, createdAt, author, location }) => {
  return (
    <div>
      {/* Grid Container */}
      <div className="gap-6 hover:scale-105 hover:ring-8">
        {/* Individual Post */}
        <Link
          to={`/post/${_id}`}
          className="cursor-pointer "
        >
          {/* Image Section */}
          <div className={`image ${!cover ? "h-48 bg-gray-200" : ""}`}>
            {cover ? (
              <img
                src={"http://localhost:4000/" + cover}
                alt={title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
            ) : (
              <div className="flex justify-center items-center h-full text-gray-500">
                No Image
              </div>
            )}
          </div>
          {/* Text Section */}
          <div className="flex flex-col justify-between p-4">
            <h2 className="text-xl font-semibold mb-2 text-blue-400 hover:text-blue-700">
              {title}
            </h2>
            <p className="info text-sm text-gray-600">
              <span>{location}</span>
              <span className="author text-gray-500 font-semibold hover:underline">
                {author.username}
              </span>
              <time className="ml-2 text-gray-400">
                {formatISO9075(new Date(createdAt))}
              </time>
            </p>
            <p className="summary mt-2 text-gray-500">{summary}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
