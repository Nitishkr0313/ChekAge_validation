import Subchild from "./Subchild";
import { useState } from "react";
export default function Parent() {
  const [name, setName] = useState("Parent Data");
  return (
    <>
      <h1 style={{ color: "red", background: "black" }}>
        This is a {name}:{setName}
      </h1>
      <button style={{ color: "white", background: "red" }}>click me!</button>

      <Subchild setb={setName} />
    </>
  );
}
