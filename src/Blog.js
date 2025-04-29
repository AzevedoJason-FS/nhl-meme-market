import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router
import axios from "axios";
import Header from "./Header";
import quote from "./quotes.svg";
import clock from "./clock.svg";

const Blog = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/blog").then((res) => setData(res.data));
    axios.get("http://localhost:5000/api/blog/categories").then((res) => setCategories(res.data));
  }, []);

  const latestPost =
    data.length > 0
      ? data.reduce((latest, current) => {
          return new Date(current.created_at) > new Date(latest.created_at) ? current : latest;
        }, data[0])
      : null;

  // Get the next 5 latest posts (excluding the latestPost)
  const nextPosts =
    data.length > 0
      ? data
          .filter((post) => post.id !== latestPost.id) // exclude the latest post
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // descending order
          .slice(0, 5) // take first 5
      : [];

  // Get 5 more posts that aren't in the first 6
  const morePosts =
    data.length > 0
      ? data
          .filter(
            (post) =>
              post.id !== latestPost.id && // not the latest post
              !nextPosts.some((p) => p.id === post.id) // not one of the nextPosts
          )
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // newest first
          .slice(0, 5)
      : [];

  const handleCategorySelect = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <Header />
      <div className="content" style={{margin: '8rem auto'}}>
        <span style={{ display: "flex", borderBottom: "1px solid rgba(255, 255, 255, 0.14)", alignItems: "center", marginTop: "0rem" }}>
          <img src={quote} alt="Quotation Icon" style={{ width: "54px" }} />
          <h2 style={{ color: "white", letterSpacing: "-0.8px", fontSize: "42px", margin: "20px" }}>Orbitly Blog</h2>
        </span>
        <div className="category-list">
          <h2>Topics</h2>
          {categories.map((cat) => (
            <p key={cat.category}>
              <button onClick={() => handleCategorySelect(cat.category)}>{cat.category}</button>
            </p>
          ))}
        </div>
        {latestPost ? (
          <div className="featured">
            <div className="featured-post">
              <img src={latestPost.cover_image_url} alt="Quotation Icon" />
              <h2>{latestPost.title}</h2>
              <p className="featured-post-summary">{latestPost.summary}</p>
              <span style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "4px", padding: "0 20px", marginBottom: "30px" }}>
                <p className="blog-category">{latestPost.category}</p>
                <img src={clock} alt="Quotation Icon" style={{ width: "14px" }} />
                <p style={{ margin: "0", padding: "0", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>{latestPost.reading_time} min read</p>
              </span>
            </div>
            <div className="small-feature">
              <div className="small">
                {nextPosts.map((post) => (
                  <div key={post.id} className="small-feature-post">
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                      <h3>{post.title}</h3>
                      <p>{post.summary}</p>
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}>
                        <p className="blog-category">{post.category}</p>
                        <div style={{ display: "flex", gap: "4px" }}>
                          <img src={clock} alt="Quotation Icon" style={{ width: "14px" }} />
                          <p style={{ margin: "0", padding: "0", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>
                            {post.reading_time} min read
                          </p>
                        </div>
                      </span>
                    </div>
                    <img src={post.cover_image_url} alt="Quotation Icon" className="image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="article-row">
          {morePosts.map((post) => (
            <div key={post.id} className="article-row-post">
              <img src={post.cover_image_url} alt="Quotation Icon" className="image" />
              <h4>{post.title}</h4>
              <p>{post.summary}</p>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: '20px'
                }}>
                <p className="blog-category">{post.category}</p>
                <div style={{ display: "flex", gap: "4px" }}>
                  <img src={clock} alt="Quotation Icon" style={{ width: "14px" }} />
                  <p style={{ margin: "0", padding: "0", color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>{post.reading_time} min read</p>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
