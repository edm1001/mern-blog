import React from "react";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, cover, createdAt, author, location }) => {
  return (
    <div>
      {/* Grid Container */}
      <div className="gap-6 p-4 my-6 hover:scale-105 hover:ring-4 ring-blue-200 rounded-lg transition-transform duration-200 sm:p-3">
        {/* Individual Post */}
        <Link to={`/post/${_id}`} className="block cursor-pointer">
          {/* Image Section */}
          <div className={`image flex justify-center pb-1 ${!cover ? "h-40 bg-gray-200" : ""}`}>
            {cover ? (
              <img
                src={"http://localhost:4000/" + cover}
                alt={title}
                className="rounded-t-lg h-28 w-28 md:h-40 md:w-48 object-cover"
              />
            ) : (
              <div className="flex justify-center items-center h-full text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* Text Section */}
          <div className="">
            <h2 className="text-sm sm:text-md font-semibold mb-1 text-blue-500 hover:text-blue-700 truncate">
              {title}
            </h2>
            <p className="info text-xs sm:text-sm text-gray-600">
              <span className="inline">{location}</span>
              <time className="text-gray-400">
                {formatISO9075(new Date(createdAt))}
              </time>
              <span className="author text-gray-500 font-semibold hover:underline block sm:inline">
                {author.username}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
