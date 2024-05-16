import React, { useState } from "react";
import profileLogo from "../images/profile-1.jpg";
import { Link, NavLink } from "react-router-dom";

const LeftComp = ({bookmarks}) => {

  const [activeItem, setActiveItem] = useState("first");

  const [on,setOn] = useState(false)
  const [show,setShow] = useState(true)

  const handleClick = (item, e) => {
    // Update state to set the active item
    e.preventDefault();

    setActiveItem(item);


    if(activeItem === 'third'){
      setOn(true);
      setShow(false)
    }else{
      setOn(false)
    }

  };

  const notifications = [
    { name: "John", message: "You have a new message", time: "2 hours ago" },
    { name: "Alice", message: "Your post got liked", time: "10 hours ago" },
    { name: "Bob", message: "You have a new friend request", time: "1 day ago" },
    { name: "Emma", message: "Your comment got replied", time: "1 day ago" },
    { name: "Charlie", message: "You have a new follower", time: "2 days ago" },
    { name: "Sarah", message: "Your friend mentioned you in a comment", time: "4 days ago" }
];

  return (
    <div className="left">
      <a href="" className="profile">
        <div className="profile-photo">
          <img src={profileLogo} alt="" />
        </div>
        <div className="handle">
          <h4>Mayank Kumar</h4>
          <p className="text-muted">@mkr</p>
        </div>
      </a>

      <div className="sidebar">
        <a href="" onClick={(e) => handleClick('first',e)} className={`menu-item ${activeItem === 'first' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-home"></i>
          </span>
          <h3>Home</h3>
        </a>

        <a href="" onClick={(e) => handleClick('second',e)} className={`menu-item ${activeItem === 'second' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-compass"></i>
          </span>{" "}
          <h3>Explore</h3>
        </a>

        <a href="" onClick={(e) => handleClick('third',e)} className={`menu-item ${activeItem === 'third' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-bell">
              <small className="notification-count" style={{display:show?"block":"none"}}>{notifications.length}</small>
            </i>
          </span>
          <h3>Notifications</h3>
          <div className="notifications-popup" style={{display:on?"block":"none"}}>
            {notifications.map((ar, ind) => (
              <div key={ind}>
                <div className="profile-photo">
                  <img src={profileLogo} alt="" />
                </div>
                <div className="notification-body">
                  <b>{ar.name}</b> {ar.message}
                  <small className="text-muted">{ar.time}</small>
                </div>
              </div>
            ))}
          </div>
        </a>

        <a href="" onClick={(e) => handleClick('fourth',e)} className={`menu-item ${activeItem === 'fourth' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-bookmark">
            <small className="notification-count">{bookmarks}</small>
            </i>
          </span>
          <h3>Bookmarks</h3>
        </a>

        <a href="" onClick={(e) => handleClick('fifth',e)} className={`menu-item ${activeItem === 'fifth' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-palette"></i>
          </span>{" "}
          <h3>Theme</h3>
        </a>

        <a href="" onClick={(e) => handleClick('sixth',e)} className={`menu-item ${activeItem === 'sixth' ? 'active' : ''}`}>
          <span>
            <i className="uil uil-setting"></i>
          </span>{" "}
          <h3>Settings</h3>
        </a>
      </div>

      <label htmlFor="create-post" className="btn btn-primary">
        Create Post
      </label>
    </div>
  );
};

export default LeftComp;
