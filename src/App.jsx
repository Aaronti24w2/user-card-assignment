import React, { useState } from "react";
import assignmentData from "./assignmentData.json";
import UserCard from "./UserCard";
import './App.css';

const App = () => {
  const [users] = useState(assignmentData[0].data);
  const [support] = useState(assignmentData[0].support);

  return (
    <div>
      <div className="grid-container">
        {users.map((user) => (
          <UserCard
            key={user.id}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>

      {support && (
        <div className="support-section">
          <p>{support.text}</p>
          <a href={support.url} target="_blank" rel="noopener noreferrer">
            Support Link
          </a>
        </div>
      )}
    </div>
  );
};
export default App;