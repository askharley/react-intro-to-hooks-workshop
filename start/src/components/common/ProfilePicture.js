import React from "react";

export default function ProfilePicture({ picture }) {
  return <img className="profile-image" src={picture} alt="user-profile" />;
}
