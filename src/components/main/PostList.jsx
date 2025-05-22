import Post from "./Post";
import { postsData } from "../../assets/data/data";

//Maps out posts, determined by if a tag is active and which
export default function Posts({ activeTag = null }) {
  return (
    <section className="scrollbar-hidden order-last min-h-[60%] w-full overflow-scroll md:order-2 md:min-h-[93%] lg:w-2/3">
      {activeTag &&
        postsData
          .filter((p) => p.tags.includes(activeTag))
          .map((p) => <Post key={p.id} post={p} activeTag={activeTag} />)}
      {!activeTag && postsData.map((p) => <Post key={p.id} post={p} />)}
    </section>
  );
}
