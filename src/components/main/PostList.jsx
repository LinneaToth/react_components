import Post from "./Post";
import { postsData } from "../../assets/data/data";

export default function Posts({ user, activeTag = null }) {
  return (
    <section className="scrollbar-hidden order-last h-[80%] w-full overflow-scroll md:order-2 lg:w-2/3">
      {activeTag &&
        postsData
          .filter((p) => p.tags.includes(activeTag))
          .map((p) => <Post key={p.id} post={p} activeTag={activeTag} />)}
      {!activeTag && postsData.map((p) => <Post key={p.id} post={p} />)}
    </section>
  );
}
