import Layout from "../components/layout/Layout";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";
import Header from "../components/header/Header";

const TotalList = () => {
  return (
    <>
      <Layout></Layout>
      <Header />
      <Form />
      <List />
      <Todo />
    </>
  );
};

export default TotalList;
