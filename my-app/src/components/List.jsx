import React from "react";
import "./components.css";
function List(props) {
  return (
    <>
      <ul className="com">
        <li>{props.color[0]}</li>
        <li>{props.color[1]}</li>
        <li>{props.color[2]}</li>
        <li>{props.color[3]}</li>
      </ul>
    </>
  );
}
export default List;
