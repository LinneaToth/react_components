import { v4 as uuidv4 } from "uuid";

export default function TagList({ tags, setActiveTag, activeTag }) {
  //counts the number of occurrences of a tag, how many posts have it?
  const countObject = {};
  tags.forEach((tag) => {
    countObject[tag] = (countObject[tag] || 0) + 1;
  });

  const uniqueTags = [...new Set(tags)]; //reduces the tags to unique ones

  return (
    <aside className="mr-10 mb-10 w-full lg:order-3 lg:w-1/5">
      <button
        onClick={() => setActiveTag(null)}
        className="mr-2 mb-2 rounded bg-(--color-tertiary-accent) p-1 text-center text-xs"
      >
        All
        <span className="ml-1 align-super font-bold text-(--color-main-bg)">
          {tags.length}
        </span>
      </button>
      {uniqueTags.map((tag) => (
        <button
          key={uuidv4()}
          className={`${activeTag !== tag ? "bg-accent" : "bg-(--color-secondary-accent)"} mr-2 mb-2 rounded p-1 text-xs hover:bg-(--color-secondary-accent)`}
          onClick={() => {
            console.log("As per assignment instructions: Button clicked!");
            setActiveTag(tag);
          }}
        >
          {tag}{" "}
          <span className="order-first align-super font-bold text-(--color-main-bg) sm:order-last">
            {countObject[tag]}
          </span>
        </button>
      ))}
    </aside>
  );
}
