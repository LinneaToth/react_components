import { useState } from "react";
import Header from "./Header";
import TagList from "./TagList";
import PostList from "./PostList";

//Returns the main content, takin postsData (all of the post content) as prop
export default function MainContent({ postsData }) {
  const [displayedTags, setDisplayedTags] = useState(null); //Which tag is active?

  const tags = postsData
    .map((p) => p.tags)
    .flat()
    .sort();

  return (
    <main className="scrollbar-hidden col-span-full row-span-9 flex flex-wrap justify-around overflow-x-hidden overflow-y-auto border-t-[1px] pr-10 pl-10 sm:col-span-2 sm:col-start-2 sm:flex-row md:col-span-4 lg:col-span-5">
      <Header />
      <PostList postsData={postsData} activeTag={displayedTags} />
      <TagList
        tags={tags}
        activeTag={displayedTags}
        setActiveTag={setDisplayedTags}
      />
    </main>
  );
}
