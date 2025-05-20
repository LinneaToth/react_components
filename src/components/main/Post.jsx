import { v4 as uuidv4 } from "uuid"; //Generates random IDs

export default function Post({ post }) {
  return (
    <article
      key={uuidv4()}
      className="text-main-bg mb-4 rounded-3xl border-[1px] border-white bg-white/85 p-4"
    >
      <h3 className="mb-2 text-lg font-bold">
        <span className="text-secondary-accent mr-5">▶</span>
        {post.heading}{" "}
        <span className="ml-3 align-super text-xs text-(--color-main-bg)">
          {post.tags.join(", ")}
        </span>
      </h3>
      <p className="mr-9 ml-9 text-center">{post.text}</p>
      <p className="text-tertiary-accent mt-2 mr-9 text-right italic">
        - {post.author || "Author unknown"}
      </p>
    </article>
  );
}
