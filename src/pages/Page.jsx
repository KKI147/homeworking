// import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
// import { useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  // const params = useParams();
  // console.log(params);
  // const location = useLocation;
  const navigate = useNavigate();

  function handleUseHistory() {
    navigate("/"); // /홈으로 url 이동
  }
  // 리덕스에서 떙기고
  const PageTodo = useSelector((state) => state.todo.todo);
  const { id } = useParams();
  // let todos = todo.find((data) => data.id === Number(id));

  // const location = useLocation();
  // const id = location.state.id;

  //useParams 가 문자열 숫자로 변환시킬 필요
  let todos = PageTodo.find((todo) => todo.id === Number(id));
  // const isDone = todos.isDone;isDone={isDone}

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  return (
    <StBox>
      <div>
        <span>ID :{id}</span>
        <h1>{todos.title}</h1>
        <h3>{todos.body}</h3>
        <StBtn onClick={handleUseHistory}>돌아가기</StBtn>
      </div>
    </StBox>
  );
};

export default Page;

const StBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  height: 220px;
  padding: 0 20px;
  background: #fafafa;
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
`;

const StBtn = styled.button`
  align-items: flex-start;
  font-weight: 400;
  color: black;
  border: 1px solid black;
  height: 40px;
  width: 120px;
`;
