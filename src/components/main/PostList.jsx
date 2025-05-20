import { useState, useEffect } from "react";
import Posts from "./Posts";
import Users from "./Users";

export default function PostList({ postsData }) {
  const [activeUser, setActiveUser] = useState(null);
  const users = [...new Set(postsData.map((p) => p.author))]; //using set to reduce the array to unique users

  function toggleActiveUser(user) {
    setActiveUser(user);
  }

  return (
    <section className="flex w-3/4 flex-row">
      <Users users={users} toggleActiveUser={toggleActiveUser} />
      <Posts user={activeUser} />
    </section>
  );
}
