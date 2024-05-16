import React from "react";
import profileLogo from "../images/profile-1.jpg";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className="container">
        <h2 className="log">SocialSphere</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Enter keywords to search among the posts..."
          />
        </div>
        <div className="create">
          <label
            className="btn btn-primary"
            htmlFor="create-post"
            onClick={scrollToTop}
          >
            Create
          </label>
          <div className="profile-photo" style={{cursor:"pointer"}} >
            <img src={profileLogo} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
