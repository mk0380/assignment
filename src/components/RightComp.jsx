import React, { useState } from "react";
import profileLogo1 from "../images/profile-1.jpg";
import profileLogo2 from "../images/profile-2.jpg";
import profileLogo3 from "../images/profile-3.jpg";
import profileLogo4 from "../images/profile-4.jpg";
import profileLogo5 from "../images/profile-5.jpg";
import profileLogo6 from "../images/profile-6.jpg";
import profileLogo7 from "../images/profile-7.jpg";
import profileLogo8 from "../images/profile-8.jpg";
import profileLogo9 from "../images/profile-9.jpg";
import profileLogo10 from "../images/profile-10.jpg";
import profileLogo0 from "../images/profile-11.jpg";

const RightComp = () => {
  const [display, setDisplay] = useState(false);

  const [name, setName] = useState("")

  let [requestData, setRequestData] = useState([
    { id: 11,pic: profileLogo0, name: "Aarav Singh", friends: 5 },
    { id: 21,pic: profileLogo2, name: "Aarohi Gupta", friends: 7 },
    { id: 31,pic: profileLogo3, name: "Abhay Patel", friends: 3 },
    { id: 41,pic: profileLogo4, name: "Aditi Sharma", friends: 9 },
    { id: 51,pic: profileLogo5, name: "Alok Kumar", friends: 2 },
    { id: 61,pic: profileLogo6, name: "Ananya Mishra", friends: 8 },
    { id: 71,pic: profileLogo7, name: "Arjun Singhania", friends: 6 },
    { id: 81,pic: profileLogo8, name: "Bhavya Verma", friends: 4 },
    { id: 91,pic: profileLogo9, name: "Chetan Joshi", friends: 1 },
    { id: 101,pic: profileLogo10, name: "Deepika Rajput", friends: 10 },
  ]);

  let [chatList, setChatList] = useState([
    {
      id: 1,
      pic: profileLogo2,
      name: "Apurva Arsh",
      messages: [
        { sender: 1, message: "Hey, how are you?" }, // My message
        { sender: 2, message: "I'm good, thanks!" }, // Friend's message
      ],
    },
    {
      id: 2,
      pic: profileLogo1,
      name: "Kartik Kumar",
      messages: [
        { sender: 1, message: "What are you up to?" }, // My message
        { sender: 2, message: "Just studying for exams." }, // Friend's message
      ],
    },
    {
      id: 3,
      pic: profileLogo0,
      name: "Manish Sharma",
      messages: [
        { sender: 1, message: "Want to hang out this weekend?" }, // My message
        { sender: 2, message: "Sorry, I'm busy. Maybe next time." }, // Friend's message
      ],
    },
    {
      id: 4,
      pic: profileLogo4,
      name: "Samir Kumar",
      messages: [
        { sender: 1, message: "Do you want to grab lunch?" }, // My message
        { sender: 2, message: "Sure, let's go to that new place!" }, // Friend's message
      ],
    },
  ]);

  const requestChange = (id, code, data) => {
    if (code === 1)
      chatList = [
        ...chatList,
        {
          name: data.name,
          id: data.id,
          messages: [
            { sender: 1, message: "" },
            { sender: 2, message: "" },
          ],
        },
      ];

    requestData = requestData.filter((data, _) => data.id !== id);
    setRequestData(requestData);
    setChatList(chatList);
  };

  const changeHandler = (e)=>{
    setName(e.target.value);
    chatList = chatList.filter((data, _) => data.name.includes(e.target.value));
    setChatList(chatList)
  }

  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <i className="uil uil-edit"></i>
        </div>

        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search by name..."
            id="message-search"
            value={name}
            onChange={changeHandler}
          />
        </div>

        <div className="category">
          <h6 className="active">Primary</h6>
          <h6
            className="message-requests"
            style={{ cursor: "pointer" }}
            onClick={() => setDisplay((prev) => !prev)}
          >
            Requests({requestData.length})
          </h6>
        </div>

        {chatList.map((data, indx) => (
          <div className="message">
            <div className="profile-photo">
              <img src={data.pic} alt="" />
            </div>
            <div className="message-body">
              <h5>{data.name}</h5>
              <p className="text-muted">
                {data.messages[data.messages.length - 1].message}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="friend-requests"
        style={{ display: display ? "block" : "none" }}
      >
        <h4>Requests</h4>
        {requestData.map((data, _) => (
          <div className="request">
            <div className="info">
              <div className="profile-photo">
                <img src={data.pic} alt="" />
              </div>
              <div>
                <h5>{data.name}</h5>
                <p className="text-muted">{data.friends} mutual friends</p>
              </div>
            </div>
            <div className="action">
              <button
                className="btn btn-primary"
                onClick={() => requestChange(data.id, 1, data)}
              >
                Accept
              </button>
              <button
                className="btn"
                onClick={() => requestChange(data.id, 2, data)}
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightComp;
