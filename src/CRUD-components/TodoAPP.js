import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, saveTodo, toggleCheck } from "./store";
import { useDispatch } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoIosSave, IoMdSave } from "react-icons/io";

export const TodoAPP = () => {
  const dispatch = useDispatch();
  const [inputval, setInputval] = useState("");
  const [saveinput, changeSave] = useState("");
  const data = useSelector((state) => state.todo);

  const AddTodo = () => {
    if (inputval !== "") {
      dispatch(addTodo({ title: inputval }));

      setInputval("");
    }
  };


  return (
    <div className="container">
 <div className="row d-flex flex-col align-item-center">
  
    <h1 className="col-12">This is Example of redux</h1>
    <div className="d-flex col-12 col-lg-6">
      <div className="form-control w-100">
        <label>Add Todo</label>
        <input
          type="text"
          value={inputval}
          placeholder="Enter Todo"
          onChange={(e) => {
            setInputval(e.target.value);
          }}
          className="form-control"
        />
        <button className="btn btn-primary m-2" onClick={() => AddTodo()}>
          AddTodo
        </button>
      </div>
    </div>
    <ul className="list-group col-12 col-lg-6">
      {data.todo.map((each) =>
        each.isEditing ? (
          <div
            key={each.id}
            className="list-group-item d-flex flex-row justify-content-between"
          >
            <div className="d-flex gap-3">
              <label className="p-1" id={each.id}>
                {each.title}
              </label>
              <input
                id={each.id}
                checked={each.isCheck}
                type="checkbox"
                onChange={() => dispatch(toggleCheck({ id: each.id }))}
              />
            </div>
            <div className="d-flex gap-3 align-items-center">
              <MdEdit
                className="border border-secondary"
                onClick={() => {
                  dispatch(editTodo({ id: each.id }));
                  changeSave(each.title);
                }}
              />{" "}
              <FaDeleteLeft
                className="border border-danger"
                onClick={() => {
                  dispatch(deleteTodo({ id: each.id }));
                
                }}
              />
            </div>
          </div>
        ) : (
          <div
            key={each.id}
            className="d-flex flex-row justify-content-between align-items-center border p-1"
          >
            <input
              type="text"
              className="form-control m-2 "
              value={saveinput}
              onChange={(e) => changeSave(e.target.value)}
            />{" "}
            <IoIosSave
              onClick={() => {
                dispatch(saveTodo({ id: each.id, title: saveinput }));
              }}
            />
          </div>
        )
      )}
    </ul>
  
</div>

    </div>
   
  );
};
