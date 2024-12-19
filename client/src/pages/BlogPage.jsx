import Post from "../components/Post";
import { useEffect, useState, useContext } from "react";
import Hero from "../components/Hero";
import { UserContext } from "../UserContext";
import Services from "../components/Services";
import About from "../components/About";

// make this into blog Page, home will be somewhere else
export default function IndexPage() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((userInfo) => setUserInfo(userInfo))
      .catch((error) => console.error("Failed to fetch user profile:", error));
  }, [setUserInfo]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:4000/post"); // No credentials required
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
  }, []);

  return (
    <div className=" mx-auto">
      <Hero />
      {/* Grid Container */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
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
