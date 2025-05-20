import { v4 as uuidv4 } from "uuid"; //Generates random IDs

export default function Post({ post }) {
  return (
    <article
      key={uuidv4()}
      className="text-accent mb-4 rounded-lg bg-white/85 p-4"
    >
      <h3>{post.heading} </h3>
      <p>{post.text}</p>
      <cite>- {post.author}</cite>
    </article>
  );
}
