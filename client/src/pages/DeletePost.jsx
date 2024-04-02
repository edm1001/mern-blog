import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div>
      Are you sure?
      <button onClick={handleDeletePost}> Confirm Deletion</button>
      <Link to={"/"}>
        <button>Nevermind!</button>{" "}
      </Link>
    </div>
  );
}
