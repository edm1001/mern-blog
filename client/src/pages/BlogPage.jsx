import Post from "../components/Post";
import { useEffect, useState, useContext } from "react";
import Hero from "../components/Hero";
import { UserContext } from "../UserContext";
import About from "../components/About";


export default function IndexPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const BACKEND_URL = process.env.APP_URL || "http://localhost:4000";

  // TODO: fetch user profile
  // fetch(`http://localhost:4000/profile`, {
  useEffect(() => {
    fetch(`${BACKEND_URL}/profile`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo)
        console.log("userinfo: ", userInfo);
        console.log("backend url: ", BACKEND_URL);
      })
      .catch((error) => console.error("Failed to fetch user profile:", error));
  }, [setUserInfo]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await fetch("http://localhost:4000/post"); 
        const response = await fetch(`${BACKEND_URL}/post`); 
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, [setPosts]);

  return (
    <div className=" mx-auto">
      <Hero />
      {/* Grid Container */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-2">
        {/* Map Over Posts */}
        {posts.length > 0 &&
          posts.map((post) => (
            // Post Component Acts as a Grid Item
            <Post key={post._id} {...post} />
          ))}
      </div>
      {/* <Services /> */}
      <About />
    </div>
  );
}
