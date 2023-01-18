import React, { useState } from "react";
import "./ButtonFollow.css";

function ButtonFollow() {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing ? "button isFollowing" : "button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <button
        className={buttonClassName}
        onClick={handleClick}>
          <span className="text">
            {text}
          </span>
        <span className="unFollowing"> UnFollowing </span>
      </button>
    </>
  );
}

export default ButtonFollow;
