import Post from "../components/Post";
import {useEffect, useState, useContext} from "react";
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
    <div className="my-12">
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </div>
  );
}