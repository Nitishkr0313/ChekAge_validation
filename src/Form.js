export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You click submit button");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <level>First_Name</level>
          <input type="text" placeholder="enter the first name " />
        </div>
        <div>
          <level>Last_Name</level>
          <input type="text" placeholder="enter the last name " />
        </div>
        <div>
          <level>Email_id</level>
          <input type="text" placeholder="enter the first name " />
        </div>
        <div>
          <level>Last_Name</level>
          <input type="text" placeholder="enter the first name " />
        </div>
        <div>
          <level>First_Name</level>
          <input type="text" placeholder="enter the first name " />
        </div>
        <div>
          <level>First_Name</level>
          <input type="text" placeholder="enter the first name " />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
