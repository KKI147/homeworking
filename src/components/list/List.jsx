import styled from "styled-components";
import Todo from "../todo/Todo";
import { useSelector } from "react-redux";

function List() {
  const { todo } = useSelector((state) => state.todo);
  // const { id, title, body, isDone } = todo;
  const doneList = todo
    .filter((todo) => todo.isDone === true)
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        body={todo.body}
        isDone={todo.isDone}
      ></Todo>
    ));
  const notDoneList = todo
    .filter((todo) => todo.isDone === false)
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        body={todo.body}
        isDone={todo.isDone}
      ></Todo>
    ));
  return (
    <>
      <ListBox>Working</ListBox>
      <ListWrap>
        <Work>{doneList}</Work>
      </ListWrap>
      <ListBox>Done</ListBox>
      <ListWrap>
        <Work>{notDoneList}</Work>
      </ListWrap>
    </>
  );
}
export default List;

const ListWrap = styled.div`
  max-width: 1200px;
  gap: 12px;
  margin: 10px auto;
`;

const Work = styled.div`
  display: inline-block;
  display: flex;
  align-items: center;
  flex-flow: wrap;
  gap: 20px;
`;

const ListBox = styled.div`
  max-width: 1200px;
  justify-content: space-between;
  display: flex;
  margin: 10px auto;
  font-size: 24px;
  padding: 10px;
`;

/* 
key={todo.id}
                id={todo.id}
                title={todo.title}
                body={todo.body}
                isDone={todo.isDone} */
