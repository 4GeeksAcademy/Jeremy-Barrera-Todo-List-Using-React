import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    if (e.key === "Enter" && text.trim()) {
      setItems([...items, text]);
      setText("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="box">
      <input className="list" type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={addItem} placeholder="What needs to be done?"/>
      <ul className="list-container">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
            <i className="fa-solid fa-x delete" onClick={() => deleteItem(index)}></i>
          </li>
        ))}
      </ul>
      <div className="counter">Total Items: {items.length}</div>
    </div>
  );
};

export default Home;
