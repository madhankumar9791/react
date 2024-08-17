import React, { useState } from "react";

export default function Tables() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [mul, setMul] = useState("");
  const [newVal, setNewVal] = useState([]);

  const multipletable = (e) => {
    e.preventDefault();

    let startVal = parseInt(start);
    let endVal = parseInt(end);
    let mulVal = parseInt(mul);
     if ((start == "") || (end =="")) {
      alert("Please enter valid numbers.");
      return;
    }

    let tableData = [];

    while (startVal <= endVal) {
      let res = startVal * mulVal;

      tableData.push({
        starta: startVal,
        enda: endVal,
        mula: mulVal,
        result: res
      });

      startVal++;
    }

     setNewVal(tableData);
  };

  return (
    <div>
      <h1>Tables</h1>
      <form style={{ margin: "40px" }} onSubmit={multipletable}>
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          placeholder="start"
        />{" "}
        <br /> <br />
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          placeholder="end"
        />{" "}
        <br />
        <br />
        <input
          type="number"
          value={mul}
          onChange={(e) => setMul(e.target.value)}
          placeholder="multiple"
        />{" "}
        <br />
        <br />
        <input type="submit" />
      </form>

      <div>
        {newVal.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Start Value</th>
                <th>End Value</th>
                <th>Multiply By</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {newVal.map((item, index) => (
                <tr >
                  <td>{item.starta}</td>
                  <td>{item.enda}</td>
                  <td>{item.mula}</td>
                  <td>{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
