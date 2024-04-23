import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {UserContextProvider} from './UserContext'
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Supplements from "./pages/Supplements";
import Equipment from "./pages/Equipment";

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<HomePage/>}/>
      <Route  path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/post/:id' element={<PostPage/>}/>
      <Route path="/edit/:id" element={<EditPost/>}/>
      </Route>
      <Route path="/delete/:id" element={<DeletePost/>}/>
      <Route path="/supplements" element={<Supplements/>}/>
      <Route path="/equipment" element={<Equipment/>}/>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
