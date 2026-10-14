import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({ id, name, city, hobby, onRemove }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="profile-card">
      <div className="profile-avatar">{name[0]}</div>
      <h2 className="profile-name">{name}</h2>
      <p className="profile-info">📍 {city}</p>
      <p className="profile-info">🎯 {hobby}</p>

      <div className="card-actions">
        <button className="like-btn" onClick={() => setLikes(likes + 1)}>
          👍 {likes}
        </button>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;