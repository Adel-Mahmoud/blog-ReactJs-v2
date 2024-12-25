import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import { CategoriesIndex, CategoriesCreate, CategoriesEdit } from "../pages/categories";
import { PostsIndex, PostsCreate, PostsEdit } from "../pages/posts";
import { UsersIndex, UsersCreate, UsersEdit } from "../pages/users";
import Dashboard from "../pages/Dashboard/Dashboard";

export const routes = [
  // admin routes
  { path: "/admin/login", element: Login, layout: false, private: false, role: 'admin' },
  { path: "/admin/register", element: Register, layout:false, private: false, role: 'admin' },
  { path: "/admin/categories", element: CategoriesIndex, layout: true, private: true, role: 'admin' },
  { path: "/admin/categories/create", element: CategoriesCreate, layout: true, private: true },
  { path: "/admin/categories/edit/:id", element: CategoriesEdit, layout: true, private: true },
  { path: "/admin/posts", element: PostsIndex, layout: true, private: true },
  { path: "/admin/posts/create", element: PostsCreate, layout: true, private: true },
  { path: "/admin/posts/edit/:id", element: PostsEdit, layout: true, private: true },
  { path: "/admin/users", element: UsersIndex, layout: true, private: true },
  { path: "/admin/users/create", element: UsersCreate, layout: true, private: true },
  { path: "/admin/users/edit/:id", element: UsersEdit, layout: true, private: true },
  { path: "/admin/", element: Dashboard, layout: true, private: true},
];
