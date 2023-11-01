import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setpostTitle] = useState("");
  const [postBody, setpostBody] = useState("");

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Rocco",
      date: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis",
    },
    {
      id: 2,
      title: "Kanas",
      date: "June 19, 2021 12:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci nihil nemo obcaecati minima nisi iure ab aut quo similique.",
    },
    {
      id: 3,
      title: "Mohamed",
      date: "September 21, 2026 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis consectetur adipisicing elit  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis",
    },
    {
      id: 4,
      title: "Muaz",
      date: "August 03, 2025 13:34:36 PM",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis Lorem ipsum dolor sit amet, consectetur adipisicing elit  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis  Repudiandae accusamus nihil laudantium unde doloribus ipsam perferendis",
    },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<HomeLayout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={posts} />} />
        <Route path="/post">
          <Route
            index
            element={
              <NewPost
                postTitle={postTitle}
                setpostTitle={setpostTitle}
                postBody={postBody}
                setpostBody={setpostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
