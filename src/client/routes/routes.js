import Home from "../pages/Home/Home";
import Single from "../pages/Single/Single";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";

export const routes = [
  // user routes
  { path: "/", element: Home },
  { path: "/category/:cayegoryName/post/:id", element: Single },
  { path: "/about", element: About },
  { path: "/contact", element: Contact },
  { path: "/login", element: Login },
];
