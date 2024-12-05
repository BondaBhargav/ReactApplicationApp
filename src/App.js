import React from "react";
import { TodoAPP } from "./CRUD-components/TodoAPP";
import { Header } from "./header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { EmployeeRegister } from "./Formik/EmployeeRegister";
import { StudentsRegister } from "./StudentsRegister";
import { AccountApp } from "./CRUD-components/AccountApp";
import { ReduxToolKitExample } from "./CRUD-components/ReduxToolKitExample";
import { Products } from "./CRUD-components/Products";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Top-level routes */}
        <Route path="/" element={<Home />} />
        <Route path="employee" element={<EmployeeRegister />} />
        <Route path="student" element={<StudentsRegister />} />

        {/* Nested routes under reduxexample */}
        <Route path="reduxexample" element={<ReduxToolKitExample />}>
          <Route path="account" element={<AccountApp />} />
          <Route path="todo" element={<TodoAPP />} />
          <Route path="products" element={<Products/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
