import Post from "../components/Post";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";
import About from "../components/About";
import Services from "../components/Services";
import Hero from "../components/Hero";

export default function IndexPage() {
  const BACKEND_URL = process.env.APP_URL || "http://localhost:4000";
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  // FIXME: fetch user profile
useEffect(() => {
  const fetchProfile = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/profile`, {
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };
  fetchProfile();
},[]);
 
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
  }, []);

  return (
    <>
      {/* Section */}
      <div className="">
        <Hero />
        {/* Grid Container */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-24">
          {/* Map Over Posts */}
          {posts.length > 0 &&
            posts.map((post) => (
              // Post Component Acts as a Grid Item
              <Post key={post._id} {...post} />
            ))}
        </div>
        <About />
        <Services />
      </div>
    </>
  );
}


 // useEffect(() => {
  //   fetch(`${BACKEND_URL}/profile`, {
  //     credentials: "include",
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((userInfo) => {
  //       setUserInfo(userInfo);
  //       console.log("userinfo: ", userInfo);
  //     })
  //     .catch((error) => console.error("Failed to fetch user profile:", error));
  // }, [setUserInfo]);
