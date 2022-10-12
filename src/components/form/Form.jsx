import styled from "styled-components";
import List from "../list/List";
import { inputTodo } from "../../redux/modules/todo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  const [title, setTilte] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.todo);
  // console.log(todo);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // input value 초기화
    setTilte("");
    setBody("");

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
  // }, [todo]);
  return (
    <>
      <StBox>
        <AddForm onSubmit={onSubmitHandler}>
          <InputGroup>
            <FormLabel>제목</FormLabel>
            <AddInput
              type="text"
              value={title}
              onChange={(e) => {
                setTilte(e.target.value);
              }}
            />
            <FormLabel>내용</FormLabel>
            <AddInput
              type="text"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </InputGroup>
          <Btn type="submit">추가버튼</Btn>
        </AddForm>
      </StBox>
      <List />
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
  flex: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  min-width: 800px;
  margin: 10px auto;
  background: #333333;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const AddInput = styled.input`
  height: 40px;
  width: 240px;
  border: 1px solid black;
  border-radius: 12px;
  padding: 0 12px;
`;

const AddForm = styled.form`
  background: #333333;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  width: 1200px;
  height: 80px;
  color: white;
`;

const Btn = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 1px solid white;
  width: 140px;
  color: #333333;
  font-weight: 700;
`;
