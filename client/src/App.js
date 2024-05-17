import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from './UserContext'
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <>
    <UserContextProvider>
      <Header/>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/blog" element={<BlogPage/>}/>
      <Route  path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path="/edit/:id" element={<EditPost/>}/>
      <Route path="/delete/:id" element={<DeletePost/>}/>
    </Routes>
    </UserContextProvider>
    </>
  );
}

export default App;
