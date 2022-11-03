import Child from "./Child";
export default function Subchild(props) {
  return (
    <>
      <h1>This is subchild component</h1>
      <button
        style={{ color: "pink", background: "blue" }}
        onClick={() => console.log("cbvcmvc")}
      >
        click me!
      </button>

      <Child setc={props.setb} />
    </>
  );
}
