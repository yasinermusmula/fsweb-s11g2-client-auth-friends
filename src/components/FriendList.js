import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "../context/authContext";

export default function FriendList() {
  const { axiosWithAuthInstance } = useAuth();
  const { friends, setFriends } = useState([]);

  useEffect(() => {
    axiosWithAuthInstance
      .get("friends")
      .then((res) => {
        console.log("/friends", res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("/friends", err);
      });
  }, []);

  return (
    <div>
      <h2>FRIEND LIST</h2>
      <ul className="list">
        {friends.map((friend, key) => (
          <NavLink key={key} to={`/friends/${friend.id}`}>
            <li>
              - {friend.name}-{friend.email}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
