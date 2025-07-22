import "./App.css";
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout/>}>
          <Route path='' element = {<Home />} caseSensitive/>
          <Route path='shop' element = {<Shop />} caseSensitive/>
          <Route path='courses' element = {<Courses />} caseSensitive/>
          <Route path='aboutus' element = {<AboutUs />} caseSensitive/>
          <Route path='contactus' element = {<ContactUs />} caseSensitive/>
          <Route path='login' element = {<Login />} caseSensitive/>
          <Route path='signup' element = {<Signup />} caseSensitive/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
