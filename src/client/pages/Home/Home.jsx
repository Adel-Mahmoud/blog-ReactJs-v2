import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../shared/services/api";
import ClientLayout from "../../layouts/ClientLayout";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const handleCategories = async () => {
    const response = await api.get("/categories");
    setCategories(response.data);
  };

  const handlePostsByCategory = async (e, category) => {
    e.preventDefault();
    const response = category
      ? await api.get(`/postsByCategory/${category}`)
      : await api.get("/posts");
    setPosts(response.data);
  };

  const handlePosts = async () => {
    const response = await api.get("/posts");
    setPosts(response.data);
  };

  useEffect(() => {
    handleCategories();
    handlePosts();
  }, []);

  const imgBase = "http://192.168.1.219/adel/blog/v1/backend/public/storage/";

  return (
    <>
      <ClientLayout>
        <section className="categories">
          <h2>Categories</h2>
          <div className="category-grid">
            {categories.length > 0 && (
              <>
                <div onClick={(e) => handlePosts()} className="category-card">
                  <i className="fas fa-laptop-code"></i>
                  <h3>All Posts</h3>
                </div>
                {categories.map((category) => (
                  <div
                    onClick={(e) => handlePostsByCategory(e, category.id)}
                    className="category-card"
                    data-category="technology"
                    key={category.id}
                  >
                    <i className="fas fa-laptop-code"></i>
                    <h3>{category.category_name}</h3>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="articles">
          <h2>Latest Articles</h2>
          <div className="articles-grid">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div className="article-card" key={post.id}>
                  <img
                    src={imgBase + post.image_path}
                    alt={post.title}
                    className="article-image"
                  />
                  <div className="article-content">
                    <div className="article-category">
                      {post.category?.category_name || "Uncategorized"}
                    </div>
                    <Link
                      to={`category/${post.category.category_name}/post/${post.id}`}
                      className="read-more"
                    >
                      <h3 className="article-title">{post.title}</h3>
                    </Link>
                    <p
                      className="article-excerpt"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    ></p>
                  </div>
                </div>
              ))
            ) : (
              <p>No articles available.</p>
            )}
          </div>
        </section>
      </ClientLayout>
    </>
  );
};

export default Home;
