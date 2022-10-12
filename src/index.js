import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TotalList from "./pages/TotalList";
import Page from "./pages/Page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TotalList />}></Route>
        <Route path="/page/:id" element={<Page />}></Route>
        <Route path="/page/" element={<Page />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
