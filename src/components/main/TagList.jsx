export default function TagList({ tags }) {
  const countObject = {};
  tags.forEach((tag) => {
    countObject[tag] = (countObject[tag] || 0) + 1;
  });

  return (
    <aside className="mr-10 w-1/5">
      {tags.map((tag) => (
        <button className="bg-accent m-2 rounded p-1 text-xs hover:bg-(--color-secondary-accent)">
          {tag}
        </button>
      ))}
    </aside>
  );
}
