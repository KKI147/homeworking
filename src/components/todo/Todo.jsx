import styled from "styled-components";
import { deleteTodo, changeTodo } from "../../redux/modules/todo";
import { useSelector, useDispatch } from "react-redux";

function Todo({ id, title, body, isDone }) {
  //state 값 가져오기
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  //id 값 기준
  const handleRemove = (id) => {
    dispatch(deleteTodo(id));
  };

  //boolean 값 기준
  const toggleMenu = (id) => {
    dispatch(changeTodo(id));
  };

  return (
    <StBox>
      <div>
        <span>상세페이지</span>

        <div>
          <h2 className="todoTitle">{title}</h2>
          <h3>{body}</h3>
        </div>

        <StBtn onClick={() => handleRemove(id)}>삭제하기</StBtn>
        <StBtn onClick={() => toggleMenu(id)}>{isDone ? "완료" : "취소"}</StBtn>
      </div>
    </StBox>
  );
}

export default Todo;

const StBtn = styled.button`
  align-items: flex-start;
  font-weight: 400;
  color: black;
  border: 1px solid black;
  height: 40px;
  width: 120px;
`;

const StBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  height: 220px;
  display: flex;
  padding: 0 20px;
  background-color: white;
  width: 300px;
`;
