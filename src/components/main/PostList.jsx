import Post from "./Post";
import { postsData } from "../../assets/data/data";

export default function Posts({ user, activeTag = null }) {
  return (
    <section className="scrollbar-hidden h-[600px] w-full overflow-scroll lg:w-2/3">
      {activeTag &&
        postsData
          .filter((p) => p.tags.includes(activeTag))
          .map((p) => <Post key={p.id} post={p} activeTag={activeTag} />)}
      {!activeTag && postsData.map((p) => <Post key={p.id} post={p} />)}
    </section>
  );
}
