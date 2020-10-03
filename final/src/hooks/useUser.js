import { useState, useEffect } from "react";
import fetchUser from "../utils/fetchUser";

export default function useUser(userId) {
  // Keeping our state
  const [user, setUser] = useState({ tips: [] });

  // Setup
  // Fetching our data
  // Watching for changes
  // Clean up
  useEffect(() => {
    let current = true;
    // uid
    fetchUser(userId).then(res => {
      // new uid
      if (current) setUser(res.data);
    });

    // clean up
    return () => {
      current = false;
    };
  }, [userId]);

  return user;
}
