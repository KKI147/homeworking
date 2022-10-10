// src/modules/todo.js

// action value
const INPUT_TODO = "INPUT_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// action creator
export const inputTodo = (payload) => {
  return { type: INPUT_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const changeTodo = (payload) => {
  return { type: CHANGE_TODO, payload };
};

// 초기 상태값
const initialState = {
  todo: [
    {
      id: 0,
      title: "왜 ",
      body: "처음하는 것 같지?",
      isDone: true,
    },
  ],
};

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TODO:
      return {
        ...state,
        // useState 배열 복사기능
        todo: [...state.todo, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        // 필터로 쪼개고
        todo: state.todo.filter((todo) => {
          // id 기준으로
          return todo.id !== action.payload;
        }),
      };
    case CHANGE_TODO:
      return {
        ...state,
        // isdone 값에 따라서 표시 해야하는데 change?
        todo: state.todo.filter((todo) => {
          return todo.isDone === true ? "취소" : "완료";
        }),
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todo;
