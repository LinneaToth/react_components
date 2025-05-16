import Header from "./Header";
import PostList from "./PostList";
import TagList from "./TagList";
import Users from "./Users";

export default function MainContent() {
  return (
    <main className="h-full w-full col-span-full sm:col-start-2 sm:col-span-2 md:col-span-4 lg:col-span-5 flex flex-row flex-wrap border-t-[1px]">
      <Header />
      <PostList />
      <TagList />
    </main>
  );
}
