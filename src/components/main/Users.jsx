import { v4 as uuidv4 } from "uuid";

export default function Users({ users, toggleActiveUser }) {
  return (
    <section className="border-accent w-1/4 border-4">
      <ul>
        {users.map((u) => {
          return (
            <li
              key={uuidv4()}
              onClick={() => {
                toggleActiveUser(u);
              }}
            >
              {u}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
