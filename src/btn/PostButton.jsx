import React from "react";

function PostButton({ target, text, onClick }) {
  return (
    <button className="post-button" onClick={onClick}>
      {text} {target && `→ ${target}`}
    </button>
  );
}

export default PostButton;