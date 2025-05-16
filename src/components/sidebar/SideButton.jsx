//Component responsible for the buttons in the sidebar
export default function SideButton({ name = "undefined", onClick, isActive }) {
  return (
    <button
      onClick={() => {
        onClick(name);
      }}
      className={
        "cursor-pointer mt-2 ml-5 mr-5 rounded-3xl h-12 active:scale-105 transition-all ease-in-out duration-200 " +
        (isActive ? "bg-(--color-accent)" : "bg-(--color-main-bg)")
      }>
      {name}
    </button>
  );
}
