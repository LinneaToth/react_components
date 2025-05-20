import Post from "./Post";
import { postsData } from "../../assets/data/data";

export default function Posts({ user }) {
  return (
    <section className="scrollbar-hidden h-[600px] w-2/3 overflow-scroll">
      {postsData
        .filter((p) => p.author === user)
        .map((p) => (
          <Post key={p.id} post={p} />
        ))}
    </section>
  );
}
