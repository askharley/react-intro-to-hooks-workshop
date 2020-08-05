import React, { useState, useEffect } from "react";
import ProfilePicture from "./common/ProfilePicture";
import ProfileName from "./common/ProfileName";
import ProfileTips from "./common/ProfileTips";
import fetchUser from "../utils/fetchUser";

function useUser(userId) {
  // Initializing state
  const [user, setUser] = useState({ tips: [] });

  // Setup
  // Fetching our data
  // Watching for changes
  // Clean up
  // The movie Click
  useEffect(() => {
    let current = true;
    // uid
    fetchUser(userId).then(res => {
      // new uid
      if (current) setUser(res.data);
    });

    return () => {
      current = false;
    };
  }, [userId]);

  return user;
}

export default function UserProfileFunction({ userId }) {
  const user = useUser(userId);

  return (
    <div>
      <ProfilePicture picture={user.picture} />
      <ProfileName name={user.name} />
      <ProfileTips tips={user.tips} />
    </div>
  );
}
