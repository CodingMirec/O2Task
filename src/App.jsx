import { useState } from "react";
import InputComponent from "./components/InputComponent";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <>
      <div className="App">
        <h1>O2 React Task</h1>
        <div className="row">
          <InputComponent
            label="Input"
            optionalLabel="Optional"
            placeholder="Placeholder"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="name"
            disabled={false}
            errorMessage={value.length > 10 ? "Input is too long" : ""}
          />
        </div>

        <div className="row">
          <InputComponent
            label="Input"
            optionalLabel="Optional"
            description="A description should be a short, complete sentence."
            placeholder="Placeholder"
            onChange={(e) => setValue1(e.target.value)}
            value={value1}
            type="name"
            disabled={true}
            errorMessage={value1.length > 10 ? "Input is too long" : ""}
          />
        </div>

        <div className="row">
          <InputComponent
            label="Email"
            optionalLabel="Optional"
            description="A description should be a short, complete sentence."
            placeholder="Placeholder"
            required={true}
            onChange={(e) => setValue2(e.target.value)}
            value={value2}
            type="email"
            disabled={false}
            errorMessage={
              !emailRegex.test(value2) && value2.length > 0
                ? "Invalid email format"
                : ""
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
