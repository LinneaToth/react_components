import Post from "./Post";
import { postsData } from "../../assets/data/data";

export default function Posts({ user, activeTag = null }) {
  return (
    <section className="scrollbar-hidden h-[600px] w-2/3 overflow-scroll">
      {activeTag &&
        postsData
          .filter((p) => p.tags.includes(activeTag))
          .map((p) => <Post key={p.id} post={p} />)}
      {!activeTag && postsData.map((p) => <Post key={p.id} post={p} />)}
    </section>
  );
}
