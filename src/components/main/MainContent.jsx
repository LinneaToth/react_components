import { useState, useEffect } from "react";
import Header from "./Header";
import TagList from "./TagList";
import PostList from "./PostList";

export default function MainContent({ postsData }) {
  const [displayedTags, setDisplayedTags] = useState(null);

  const tags = postsData
    .map((p) => p.tags)
    .flat()
    .sort();

  return (
    <main className="col-span-full flex h-full w-full flex-row flex-wrap justify-between border-t-[1px] pl-10 sm:col-span-2 sm:col-start-2 md:col-span-4 lg:col-span-5">
      <Header />
      <PostList postsData={postsData} activeTag={displayedTags} />
      <TagList
        tags={tags}
        displayedTags={displayedTags}
        setActiveTag={setDisplayedTags}
      />
    </main>
  );
}
