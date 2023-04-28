import React, { useState } from "react";
function ViewItems() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const handleAddItem = () => {
    setItems([...items, { item: item, isStriked: false }]);
    setItem("");
  };
  const handleDelete = (item) => {
    const fitems = items.filter((it) => it.item !== item.item);
    setItems([...fitems]);
  };
  const handleText = (item) => {
    const fitems = items.map((it) => {
      if (it.item === item.item) {
        return {
          ...it,
          isStriked: !it.isStriked
        };
      } else {
        return it;
      }
    });
    setItems([...fitems]);
  };

  console.log(items);
  const tdata = items.map(
    (it, index) => (
      <tr key={index}>
        <td id="t1">
          <span
            onClick={() => handleText(it)}
            style={{ textDecoration: it.isStriked ? "line-through" : "none" }}
          >
            {it.item}
          </span>
        </td>
        <td>
          <button onClick={() => handleDelete(it)}>X</button>
        </td>
      </tr>
    ),
    []
  );
  return (
    <div>
      <h1> TO-DO LIST</h1>
      <input
        type={"text"}
        id="name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => handleAddItem()} id="b">
        Add
      </button>
      <h1>Items</h1>
      <table>{tdata}</table>
    </div>
  );
}

export default ViewItems;
