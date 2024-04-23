import Post from "../components/Post";
import {useEffect, useState, useContext} from "react";
import {UserContext} from "../UserContext";
import { Link } from "react-router-dom";

// make this into blog Page, home will be somewhere else
export default function IndexPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]);

  // function to log out
  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  const username = userInfo?.username;

  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    {username && (
      <>
        {/* if logged in */}
        {/* add username */}
        <Link to="/create">
          <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
            Create Post!
          </button>
        </Link>
        <a href="/"
          className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md"
          onClick={logout}
        >
          Logout ({username})
        </a>
      </>
    )}
    {!username && (
      <>
        {/* if logged out */}
        <Link to="/login">
          <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
            Log In
          </button>
        </Link>
        <Link to="/register">
          <button className="border border-gray-400 hover:bg-gray-400 hover:text-white text-gray-500 font-bold py-2 px-4 rounded-md">
            Sign Up
          </button>
        </Link>
      </>
    )}
    <div>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
    </>
  );
}