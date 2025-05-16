export default function NavLink({
  text = "undefined",
  url = "undefined",
  active = false,
  onMouseDown,
  isSmall,
}) {
  return (
    // Conditional styling, depending on state (small window or not)
    <li
      key={text}
      className={
        (!isSmall ? "text-base " : "") +
        "h-12 justify-self-center active:scale-105 transition-all ease-in-out duration-50 w-25 text-center pt-3 " +
        (isSmall ? "m-5 w-full text-3xl pb-10 " : "") +
        (active ? "bg-(--color-accent)" : "")
      }>
      <a
        href={url}
        onClick={(e) => {
          e.preventDefault();
          onMouseDown(text);
        }}>
        {text}
      </a>
    </li>
  );
}
