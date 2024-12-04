import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function DeletePost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDeletePost = () => {
    fetch(`http://localhost:4000/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-400 rounded-lg shadow-md h-screen bg-dark-bg">
      <div className="flex items-center mb-4">
        <FaExclamationTriangle className="text-yellow-500 w-6 h-6 mr-2" />
        <h2 className="text-lg font-semibold text-dark">Are you sure?</h2>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleDeletePost}
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700"
        >
          <FaCheckCircle className="w-5 h-5 mr-2" />
          Confirm
        </button>
        <Link to="/">
          <button className="flex items-center bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400">
            <FaTimesCircle className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
