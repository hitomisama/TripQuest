import React from "react";

function PostButton({ text, onClick }) {
  return (
    <button className="post-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default PostButton;