import styled from "styled-components";
import "./style.css";
import List from "../list/List";
import { inputTodo } from "../../redux/modules/todo";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  const [title, setTilte] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.todo);
  // console.log(todo);
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === "") return alert("제목을 입력하세요");
    if (body === "") return alert("내용을 입력하세요");

    dispatch(
      inputTodo({
        id: todo.length + 1,
        title,
        body,
        isDone: true,
      })
    );
  };
  // console.log(todo);
  // useEffect(() => {
  //   alert("입력하세요");
  // }, ([onSubmitHandler] = undefined));
  return (
    <>
      <StBox>
        <form className="addForm" onSubmit={onSubmitHandler}>
          <div className="inputGroup">
            <label className="formLabel">제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTilte(e.target.value);
              }}
              className="addInput inputBody"
            />
            <label className="formLabel">내용</label>
            <input
              type="text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
              className="addInput"
            />
          </div>
          <button type="submit" className="addButton">
            추가버튼
          </button>
        </form>
      </StBox>
      <List id={todo.length + 1} isDone={true} title={title} body={body} />
      {/* {...todo} id={todo.length + 1} isDone={true} title={title} body={body} */}
    </>
  );
}

export default Form;

const StBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  min-width: 800px;
  margin: 10px auto;
  background-color: white;
`;
