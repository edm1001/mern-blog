import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(ev) {
    ev.preventDefault();
    await fetch('http://localhost:4000/login', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
        placeholder="password"
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
