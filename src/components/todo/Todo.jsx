import styled from "styled-components";
import { deleteTodo, changeTodo } from "../../redux/modules/todo";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Todo({ id, title, body, isDone }) {
  //state 값 가져오기
  // const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  //id 값 기준
  const handleRemove = (id) => {
    dispatch(deleteTodo(id));
  };

  //boolean 값 기준
  const toggleMenu = (id) => {
    dispatch(changeTodo(id));
  };

  const navigate = useNavigate();

  return (
    <StBox>
      <div>
        <span
          onClick={() => {
            navigate("/page/" + id);
          }}
        >
          상세페이지
        </span>
        {/* navigte 주소 뒤에 객체값을 받아올 수 있음 */}
        <div>
          <h2 className="todoTitle">{title}</h2>
          <h3>{body}</h3>
        </div>
        <Span>
          <StBtn onClick={() => handleRemove(id)}>삭제하기</StBtn>

          <StBtn onClick={() => toggleMenu(id)}>
            {isDone ? "완료" : "취소"}
          </StBtn>
        </Span>
      </div>
    </StBox>
  );
}

export default Todo;

const StBtn = styled.button`
  align-items: flex-start;
  font-weight: 400;
  color: white;
  border: 0;
  height: 40px;
  width: 120px;
  background: #333333;
  border-radius: 5px;
`;

const StBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  height: 220px;
  display: flex;
  padding: 0 20px;
  background-color: #fafafa;
  width: 300px;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
