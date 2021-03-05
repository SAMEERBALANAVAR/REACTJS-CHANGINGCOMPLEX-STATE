import { useState } from "react";
import "./styles.css";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }
  // function updateFname(event) {
  //   const firstName = event.target.value;
  //   setFullName(firstName);
  // }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="Enter FirstName"
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Enter SecondName"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
export default App;
