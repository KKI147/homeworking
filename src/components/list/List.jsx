import styled from "styled-components";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";

function List() {
  const { todo } = useSelector((state) => state.todo);
  // const { id, title, body, isDone } = todo;
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          justifyContent: "space-between",
          diplay: "flex",
          margin: "10px auto",
          fontSize: "24px",
        }}
      >
        {todo.isDone === true ? "Done" : "Working"}
      </div>
      <Work>
        {/* // todo의 boolen이 true일때 map으로 새배열 */}
        {/* isdone이 지정이 안됨 지정을 해줘야하는데 인덱스 값으로 받으면? */}

        {!todo.isDone === true
          ? todo.map((todo, idx) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.body}
                isDone={todo.isDone}
              />
            ))
          : ""}
      </Work>
      <div
        style={{
          maxWidth: "1200px",
          justifyContent: "space-between",
          diplay: "flex",
          margin: "10px auto",
          fontSize: "24px",
        }}
      >
        Done
      </div>
      <Work>
        <Todo />
      </Work>
    </>
  );
}

export default List;

const Work = styled.div`
  display: flex;
  align-items: center;

  max-width: 1200px;
  min-width: 800px;
  gap: 12px;
  margin: 10px auto;
`;
