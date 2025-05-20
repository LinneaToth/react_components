import figure from "../../../src/assets/img/figure.png";

//Just an image to fill out the emptiness..
export default function Figure() {
  return (
    <img
      alt="abstract illustration"
      src={figure}
      className="grid-row-2 row-span-2 mt-45 h-[175px] w-[175px] self-center justify-self-center rounded-[50%]"
    ></img>
  );
}
