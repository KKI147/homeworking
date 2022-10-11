import styled from "styled-components";
import Form from "../form/Form";

function Header() {
  return (
    <>
      <StBox>
        <div>My Todo List</div>
        <div>React</div>
      </StBox>
      <Form />
    </>
  );
}

export default Header;

const StBox = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  min-width: 800px;
  margin: 10px auto;
  background-color: white;
`;
