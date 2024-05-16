import React, { useState } from "react";
import profileLogo18 from "../images/profile-18.jpg";
import profileLogo17 from "../images/profile-17.jpg";
import profileLogo16 from "../images/profile-16.jpg";
import profileLogo15 from "../images/profile-15.jpg";
import profileLogo2 from "../images/profile-2.jpg";
import profileLogo3 from "../images/profile-3.jpg";
import profileLogo4 from "../images/profile-4.jpg";
import profileLogo5 from "../images/profile-5.jpg";
import profileLogo6 from "../images/profile-6.jpg";
import profileLogo7 from "../images/profile-7.jpg";
import profileLogo8 from "../images/profile-8.jpg";
import profileLogo9 from "../images/profile-9.jpg";
import profileLogo10 from "../images/profile-10.jpg";
import profileLogo11 from "../images/profile-11.jpg";
import profileLogo12 from "../images/profile-12.jpg";
import profileLogo13 from "../images/profile-13.jpg";
import profileLogo14 from "../images/profile-14.jpg";
import profileLogo19 from "../images/profile-19.jpg";
import profileLogo20 from "../images/profile-20.jpg";
import profileLogo from "../images/profile-1.jpg";
import feed1 from "../images/feed-2.jpg";
import feed2 from "../images/feed-1.jpg";
import feed3 from "../images/feed-3.jpg";
import feed4 from "../images/feed-4.jpg";
import feed5 from "../images/feed-5.jpg";
import feed6 from "../images/feed-6.jpg";
import feed7 from "../images/feed-7.jpg";

const MiddleComp = ({setBookmarks}) => {

    const [liked, setLiked] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)
    const [post, setPost] = useState("")


    const indianData = [
        { id: 1,pic: profileLogo15, name: "Aarav" },
        { id: 2,pic: profileLogo16, name: "Aarohi" },
        { id: 3,pic: profileLogo17, name: "Abhay" },
        { id: 4,pic: profileLogo18, name: "Aditi" },
    ];

    let [postData, setPostData] = useState([
        {
            id: 1,
            feed: feed1,
            pic:[profileLogo2,profileLogo3,profileLogo4],
            name: "Aarav",
            country: "India",
            description: "Exploring the streets of Mumbai",
            timestamp: "2 hours ago",
            friend: "Aarohi",
            likes: 15,
            comments: 5,
            hash: "#StreetPhotography"
        },
        {
            id: 2,
            feed: feed2,
            pic:[profileLogo5,profileLogo6,profileLogo7],
            name: "Aarohi",
            country: "India",
            description: "Enjoying the sunset at Goa beach.",
            timestamp: "4 hours ago",
            friend: "Aarav",
            likes: 20,
            comments: 8,
            hash: "#Travel"
        },
        {
            id: 3,
            feed: feed3,
            pic:[profileLogo8,profileLogo9,profileLogo10],
            name: "Abhay",
            country: "Australia",
            description: "Hiking in the Blue Mountains.",
            timestamp: "14 hour ago",
            friend: "Aditi",
            likes: 10,
            comments: 3,
            hash: "#Nature"
        },
        {
            id: 4,
            feed: feed4,
            pic:[profileLogo11,profileLogo12,profileLogo13],
            name: "Aditi",
            country: "India",
            description: "Exploring the historical monuments of Delhi.",
            timestamp: "16 hours ago",
            friend: "Abhay",
            likes: 25,
            comments: 12,
            hash: "#History"
        },
        {
            id: 5,
            feed: feed5,
            pic:[profileLogo14,profileLogo15,profileLogo16],
            name: "Alok",
            country: "United States",
            description: "Chilling with friends at Central Park.",
            timestamp: "1 day ago",
            friend: "Ananya",
            likes: 18,
            comments: 7,            
            hash: "#Chill"
        },
        {
            id: 6,
            feed: feed6,
            pic:[profileLogo17,profileLogo18,profileLogo19],
            name: "Ananya",
            country: "India",
            description: "Attending a traditional wedding ceremony in Jaipur.",
            timestamp: "2 days ago",
            friend: "Alok",
            likes: 22,
            comments: 9,
            hash: "#Celebration"
        },
        {
            id: 7,
            feed: feed7,
            pic:[profileLogo20,profileLogo2,profileLogo3],
            name: "Arjun",
            country: "United Kingdom",
            description: "Exploring the streets of London.",
            timestamp: "2 days ago",
            friend: "Arpita",
            likes: 30,
            comments: 15,
            hash: "#Explore"
        }
    ])

    const postHandler = (e)=>{
        e.preventDefault();
        setPostData([{
            id: postData.length+1,
            feed: feed5,
            pic:[profileLogo20,profileLogo2,profileLogo3],
            name: "Mayank",
            country: "India",
            description: post,
            timestamp: "1 minute ago",
            friend: "noone",
            likes: 0,
            comments: 0,
            hash: "#Testing"  
        },...postData])
        setPost("")
    }

    let [likedPost, setLikedPost] = useState([])
    let [bookmarkedPost, setBookmarkedPost] = useState([])


    const likeHandler = (id)=>{
      if(likedPost.includes(id)){
        likedPost = likedPost.filter((post,_)=> post!==id)
      }else{
        likedPost = [...likedPost, id]
      }
      setLikedPost(likedPost)
    }

    const bookmarkHandler = (id)=>{
      if(bookmarkedPost.includes(id)){
        bookmarkedPost = bookmarkedPost.filter((post,_)=> post!==id)
      }else{
        bookmarkedPost = [...bookmarkedPost, id]
      }
      setBookmarkedPost(bookmarkedPost)
      setBookmarks(bookmarkedPost.length)
    }

    const deleteHandler =(id)=>{
      postData = postData.filter((data,_)=> data.id!==id)
      setPostData(postData)
    }
  
  return (
    <div className="middle">
      <div className="stories">
        <div className="story">
          <div className="profile-photo">
            <img src={profileLogo} alt="" />
          </div>
          <p className="name">Your Story</p>
        </div>
        {indianData.map((data, _) => (
          <div className="story" key={data.id}>
            <div className="profile-photo">
              <img src={data.pic} alt="" />
            </div>
            <p className="name">{data.name}</p>
          </div>
        ))}
      </div>

      <form className="create-post">
        <div className="profile-photo">
          <img src={profileLogo} alt="" />
        </div>
        <input
          type="text"
          placeholder="Whats's on your mind, Mayank?"
          id="create-post"
          value={post}
          onChange={(e)=>setPost(e.target.value)}
        />
        <input type="submit" value="Post" className="btn btn-primary" onClick={postHandler}/>
      </form>

      <div className="feeds">
        {postData.map((data,indx)=>(
            <div className="feed" key={data.id}>
            <div className="head">
              <div className="user">
                <div className="profile-photo">
                  <img src={profileLogo} alt="" />
                </div>
                <div className="ingo">
                  <h3>{data.name}</h3>
                  <small>{data.country}, {data.timestamp} ago</small>
                </div>
              </div>
              <span className="edit">
                <i className="uil uil-ellipsis-h"></i>
              </span>
            </div>
  
            <div className="photo">
              <img src={data.feed} alt="" />
            </div>
  
            <div className="action-buttons">
              <div className="interaction-buttons">
                <span style={{cursor:"pointer", color: likedPost.find(id => id === data.id) !== undefined ? "red" : "black"}} onClick={()=>likeHandler(data.id)}>
                  <i className="uil uil-heart"></i>
                </span>
                <span>
                  <i className="uil uil-comment-dots"></i>
                </span>
                <span>
                  <i className="uil uil-share-alt"></i>
                </span>
                <span style={{fontSize:"1rem", alignItems:"center",padding:"1rem", marginLeft:"5rem", color:"red", cursor:"pointer"}} onClick={()=>deleteHandler(data.id)}>
                  Delete
                </span>
              </div>
              <div className="bookmark">
                <span style={{cursor:"pointer",borderRadius:"50%", color: bookmarkedPost.find(id => id === data.id) !== undefined ? "black" : "green", backgroundColor: bookmarkedPost.find(id => id === data.id) === undefined ? "" : "green" }} onClick={()=>bookmarkHandler(data.id)}>
                  <i className="uil uil-bookmark-full"></i>
                </span>
              </div>
            </div>
  
            <div className="liked-by">
              <span>
                <img src={data.pic[0]} alt="" />
              </span>
              <span>
                <img src={data.pic[1]} alt="" />
              </span>
              <span>
                <img src={data.pic[2]} alt="" />
              </span>
              <p>
                Liked by <b>{data.friend}</b> and <b>{data.likes} others</b>
              </p>
            </div>
  
            <div className="caption">
              <p>
                <b>{data.name}</b> {data.description}
                <span className="hash-tag">{data.hash}</span>
              </p>
            </div>
  
            <div className="comments text-muted">View all {data.comments} comments</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddleComp;
