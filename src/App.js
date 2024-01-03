import React, { useState, useEffect } from "react";
import "./App.css";


const mockData = [
  "John",
  "Jane",
  "John",
  "Doe",
  "Jane",
  "John",
  "Doe",
  "Doe",
  "Doe",
  "Bob",
  "Alice",
  "Alice",
  "Alice",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
  "Bob",
];

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Count occurrences of each name
    const nameCount = {};
    mockData.forEach((name) => {
      nameCount[name] = (nameCount[name] || 0) + 1;
    });

    // Create array with distinct names and their counts
    const distinctNames = Object.keys(nameCount).map((name) => ({
      name,
      count: nameCount[name],
    }));

    setData(distinctNames);
  }, []);
  return (
    <div className="App">
      <table style={{width: "50%", margin: "auto", marginTop: "30px"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duplicates</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.name}
              style={{
                backgroundColor:
                  item.count > 0 && item.count < 3
                    ? "red"
                    : item.count >= 3 && item.count < 10
                    ? "yellow"
                    : item.count >= 10
                    ? "green"
                        : "white",
              }}
            >
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
