import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    // logging in returns with wrong credentials
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    // if login is successful
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }
  if (redirect) {
    // navigate home
    return <Navigate to={"/blog"} />;
  }

  return (
    <div className="flex justify-center items-center mt-5">
      <form className="block text-center" onSubmit={login}>
        <h1 className="font-bold mb-10 text-3xl text-gray-500">Welcome Back!</h1>
        <input
          type="text"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="username"
          className="w-full mb-2 px-3 py-2 border rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
          className="w-full mb-4 px-3 py-2 border rounded-lg items-center"
        />
        <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
