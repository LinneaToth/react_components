import { useContext } from "react";
import NavContext from "../../contexts/NavContext.js";

export default function NavLink({
  text = "undefined",
  url = "undefined",
  active = false,
  onMouseDown,
}) {
  const { isSmall } = useContext(NavContext);

  return (
    // Conditional styling, depending on state (small window or not)
    <li
      key={text}
      className={
        (!isSmall ? "text-base " : "") +
        "h-12 w-25 justify-self-center rounded pt-3 text-center transition-all duration-50 ease-in-out active:scale-105" +
        " " +
        (active ? "bg-(--color-accent)" + " " : "") +
        (isSmall ? "h-20 w-60 pt-8 pb-17 text-3xl" + " " : "")
      }
    >
      <a
        className="hover:scale-110 hover:[filter:drop-shadow(0_0_0.75rem_#EE2D87)]"
        href={url}
        onClick={(e) => {
          e.preventDefault();
          onMouseDown(text);
        }}
      >
        {text}
      </a>
    </li>
  );
}
