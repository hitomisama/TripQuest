import React from "react";

function PostButton({ text, onClick }) {
  return (
    <div className="btn" onClick={onClick}>
      {text}
    </div>
  );
}

export default PostButton;