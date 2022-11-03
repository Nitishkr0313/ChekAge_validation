import { useState } from "react";
const ERR_MSG = "Age should be greter than 18";

export default function AgeCheck() {
  const [age, setAge] = useState("");
  const [err, setErr] = useState(false);
  const handleChange = (e) => {
    setErr(false);
    console.log(e.target.value);
    setAge(e.target.value);
    if (e.target.value < 18) {
      setErr(true);
    }
  };
  return (
    <>
      <level> Age:</level>
      <input type="text" value={age} onChange={handleChange} />
      {err ? ERR_MSG : null}
    </>
  );
}
