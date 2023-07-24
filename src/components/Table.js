import React from "react";

const Table = ({ items, threshold }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Items you can buy are in</th>
          <th>Green color</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td style={{ color: item.value > threshold ? "red" : "green" }}>
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
