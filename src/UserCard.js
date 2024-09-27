import React from "react";
import './UserCard.css';

const UserCard = ({ firstName, lastName, email, avatar }) => {
  return (
    <div className="user-card">
      <div className="circle"></div>
      <img className="circle" src={avatar} alt={`${firstName} ${lastName}`} />
      <div className="user-info">
        <p><strong> {firstName} {lastName}</strong></p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;