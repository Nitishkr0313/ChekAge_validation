export default function (props) {
  return (
    <>
      <h2>This is child component</h2>
      <button
        style={{ color: "black", background: "yellow" }}
        onClick={() => props.setc("Bottom to Top")}
      >
        click me!
      </button>
    </>
  );
}
