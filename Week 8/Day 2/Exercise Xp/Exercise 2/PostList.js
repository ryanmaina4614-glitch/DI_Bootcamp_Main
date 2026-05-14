import React from "react";
import data from "./data.json";

function PostList() {
  return (
    <div>
      <h1>Posts</h1>

      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostList;