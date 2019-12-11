import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const { toDoState, dispatch } = props;

  return (
    <div>
      {toDoState.items.map(element => {
        return (
          <Todo
            key={element.id}
            id={element.id}
            dispatch={dispatch}
            completed={element.completed}
            item={element.item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;