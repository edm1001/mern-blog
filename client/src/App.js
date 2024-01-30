import "./App.css";
import Post from "./components/Post";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Post />}/>
      <Route  path={'/login'} element={ <div>login</div>}/>
      </Route>
    
    </Routes>
  );
}

export default App;
