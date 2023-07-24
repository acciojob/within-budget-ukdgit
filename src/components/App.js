import './../styles/App.css';

import React, { useState } from "react";
import Table from "./Table";

const App = () => {
  const [items, setItems] = useState([
    { name: "Apple", value: 20 },
    { name: "Banana", value: 10 },
    { name: "Neutella", value: 30 },
    { name: "Razor", value: 5 },
    { name: "CornFlakes", value: 15 },
    { name: "Sound Bar", value: 50 },
    { name: "Iphone", value: 80 }
  ]);
  const [threshold, setThreshold] = useState(20);

  return (
    <div>
      <p>
        <b>Enter your budget to check available items:</b>
      </p>
      <input
        type="number"
        value={threshold}
        onChange={(e) => setThreshold(e.target.value)}
      />
      <p>
        <Table items={items} threshold={threshold} />
      </p>
    </div>
  );
};

export default App;
