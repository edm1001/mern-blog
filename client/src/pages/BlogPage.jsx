import Post from "../components/Post";
import {useEffect, useState, useContext} from "react";
import Hero from "../components/Hero";
import {UserContext} from "../UserContext";

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

 

  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
<div className="container mx-auto">
  <Hero/>
  {/* Grid Container */}
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-16 p-4">
    {/* Map Over Posts */}
    {posts.length > 0 &&
      posts.map((post) => (
        // Post Component Acts as a Grid Item
        <Post key={post._id} {...post} />
      ))}
  </div>
</div>

  );
}