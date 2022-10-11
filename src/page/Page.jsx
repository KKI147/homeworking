import { useNavigate } from "react-router-dom";
import React from "react";

const Page = () => {
  const navigate = useNavigate;

  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default Page;
