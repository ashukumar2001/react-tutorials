import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length, name: action.payload.name }];
    case "REMOVE":
      const newPeoples = state.filter(
        (person) => person.id !== action.payload.id
      );
      return newPeoples;
    default:
      return state;
  }
};
const ShoppingList = () => {
  const inputRef = useRef(null);
  const [list, dispatch] = useReducer(reducer, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { name: inputRef.current.value } });
    inputRef.current.value = "";
  };
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
      <div className="list-container">
        {list.map((item) => {
          const { id, name } = item;
          return (
            <article key={id}>
              <h3>{name}</h3>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: { id } })}
              >
                remove
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
