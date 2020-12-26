import React, { useState } from "react";
import "./styles.css";
import pass from "./images/yes.gif";
import fail from "./images/no.gif";
import question from "./images/question.gif";

export default function App() {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [lucky, setlucky] = useState(0);
  const [result, setresult] = useState(question);
  const [status, setstatus] = useState("");

  function clear() {
    document.getElementById("formContent").reset();
    setresult(question);
    setstatus("");
  }
  function clickHandler() {
    var dayno = parseInt(day);
    var monthno = parseInt(month);
    var yearno = parseInt(year);
    var luckyno = parseInt(lucky);

    if ((dayno + yearno + monthno) % luckyno === 0) {
      setresult(pass);
      var message = "you are lucky";
    } else {
      setresult(fail);
      var message = "you are ordinary";
    }
    setstatus(message);
  }
  return (
    <div className="App">
      <div className="top">Lets see you are lucky or not?</div>
      <form id="formContent">
        <pre>
          DAY:{"        "}
          <input
            className="input"
            onChange={(event) => setDay(event.target.value)}
            placeholder="Day of birth"
          />
        </pre>
        <pre>
          MONTH:{"   "}
          <input
            className="input"
            onChange={(event) => setMonth(event.target.value)}
            placeholder="Month of birth"
          />
        </pre>
        <pre>
          YEAR:{"       "}
          <input
            className="input"
            onChange={(event) => setYear(event.target.value)}
            placeholder="Year of birth"
          />
        </pre>
        <pre>
          LUCKY NO:{" "}
          <input
            className="input"
            onChange={(event) => setlucky(event.target.value)}
            placeholder="Your Lucky no."
          />
        </pre>

        <input
          className="btn"
          onClick={clickHandler}
          type="button"
          value="click"
        />
        <input className="btn" onClick={clear} type="button" value="reset" />
      </form>

      <img src={result} height="180px" width="180px" />
      <div>
        <h1>{status}</h1>
      </div>
    </div>
  );
}
