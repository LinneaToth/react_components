export default function TagList({ tags, setActiveTag }) {
  const countObject = {};
  tags.forEach((tag) => {
    countObject[tag] = (countObject[tag] || 0) + 1;
  });

  const uniqueTags = [...new Set(tags)];

  console.log(countObject);
  return (
    <aside className="mr-10 w-1/5">
      {uniqueTags.map((tag) => (
        <button
          className="bg-accent m-2 rounded p-1 text-xs hover:bg-(--color-secondary-accent)"
          onClick={() => {
            console.log("As per assignment instructions: Button clicked!");
            setActiveTag(tag);
          }}
        >
          {tag}{" "}
          <span className="align-super font-bold text-(--color-main-bg)">
            {countObject[tag]}
          </span>
        </button>
      ))}
    </aside>
  );
}
