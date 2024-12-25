import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../shared/services/api";
import MasterLayout from "../../layouts/MasterLayout";

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [post, setPost] = useState({
    category: { category_name: "" },
    user: { name: "" },
    content: "",
    image_path: "",
  });

  const imgBase = "http://192.168.1.219/adel/blog/v1/backend/public/storage/";

  const handlePost = async () => {
    const response = await api.get(`/posts/${id}`);
    setPost(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    handlePost();
    fetchComments();
  }, [id]);

  const fetchComments = async () => {
    try {
      const response = await api.get(`/postid/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      toast.error("Failed to load comments. Please try again.");
    }
  };

  const handleCreateComment = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.warning("Please login to add a comment.");
      navigate("/login");
      return;
    }

    if (!comment.trim()) {
      toast.warning("Comment cannot be empty.");
      return;
    }

    try {
      const response = await api.post("/comments", {
        post_id: id,
        username: user.name,
        picture: user.picture,
        comment: comment,
      });

      if (response) {
        toast.success("Comment added successfully!");
        setComment("");
        fetchComments();
      }
    } catch (err) {
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Failed to add comment. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <MasterLayout>
      <main className="article-page">
        <img
          className="article-image"
          src={imgBase + post.image_path}
          alt="Article Featured Image"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        />
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></article>

        <section className="comments-section">
          <h3>Comments</h3>
          <div className="comments-container">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div className="comment" key={index}>
                  <div className="comment-header">
                    <img
                      src={comment.picture}
                      alt={comment.username}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <span className="commenter-name">{comment.username}</span>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>

          <form
            id="comment-form"
            className="comment-form"
            onSubmit={handleCreateComment}
          >
            <h3>Add a Comment</h3>
            <div className="form-group">
              <label htmlFor="comment-text">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                id="comment-text"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Post Comment
            </button>
          </form>
        </section>
      </main>
    </MasterLayout>
  );
};

export default Single;
