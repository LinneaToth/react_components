import Posts from "./Posts";
import Users from "./Users";

export default function PostList() {
  return (
    <section className="flex flex-row w-2/3">
      <Users />
      <Posts />
    </section>
  );
}
