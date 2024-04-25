import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const MAX_INPUT_LENGTH = 10; // Maximum allowed input length

  const handler = (e) => {
    if (value.length < MAX_INPUT_LENGTH) {
      setValue(value + e.target.value);
    }
  };
  const handler1 = (e) => {
    if (value.length < MAX_INPUT_LENGTH + 1) {
      setValue(value + e.target.value);
    }
  };
  const handler2 = (e) => {
    if (value && value.length < MAX_INPUT_LENGTH - 1) {
      setValue(value + e.target.value);
    }
  };

  const del = (e) => {
    setValue(value.slice(0, -1));
  };
  const clear = (e) => {
    setValue("");
  };
  let evals = (e) => {
    try {
      const result = evaluate(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" className="disp" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={clear} />
            <input type="button" value="DEL" onClick={del} />
            <input type="button" value="." onClick={handler2} />
            <input type="button" value="/" onClick={handler2} />
          </div>
          <div>
            <input type="button" value="7" onClick={handler} />
            <input type="button" value="8" onClick={handler} />
            <input type="button" value="9" onClick={handler} />
            <input type="button" value="*" onClick={handler2} />
          </div>
          <div>
            <input type="button" value="4" onClick={handler} />
            <input type="button" value="5" onClick={handler} />
            <input type="button" value="6" onClick={handler} />
            <input type="button" value="+" onClick={handler2} />
          </div>
          <div>
            <input type="button" value="1" onClick={handler} />
            <input type="button" value="2" onClick={handler} />
            <input type="button" value="3" onClick={handler} />
            <input type="button" value="-" onClick={handler1} />
          </div>
          <div>
            <input type="button" value="00" onClick={handler2} />
            <input type="button" value="0" onClick={handler} />
            <input
              className="equallto"
              type="button"
              value="="
              onClick={evals}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
