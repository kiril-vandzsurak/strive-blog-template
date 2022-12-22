// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
// import BlogItem from "../blog-item/BlogItem";
// import { useState, useEffect } from "react";

// const BlogList = (props) => {
//   const [info, setInfo] = useState([]);

//   const fetchBlogs = async () => {
//     try {
//       let response = await fetch(`http://localhost:3001/authors`);
//       if (response.ok) {
//         let data = await response.json();
//         setInfo(data);
//       } else {
//         console.log("error");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <Row>
//       {info.map((post) => (
//         <Col
//           md={4}
//           style={{
//             marginBottom: 50,
//           }}
//         >
//           <BlogItem key={post.title} {...post} />
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default BlogList;

import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const reposne = await fetch("http://localhost:3001/authors");
      const data = await reposne.json();
      setBlogs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Row>
      {blogs.map((blog) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={blog.title} {...blog} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
