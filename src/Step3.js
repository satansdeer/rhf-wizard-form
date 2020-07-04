import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseCheese } from "./rootSlice";

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const cheese = useSelector(state => state.cheese)
  const { register, handleSubmit } = useForm({defaultValues: {cheese}});

  const onSubmit = (data) => {
    dispatch(chooseCheese(data.cheese));
    history.push("./step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cheese">Pick cheese:</label>
        <select id="cheese" name="cheese" ref={register}>
          <option value="no_cheese">No Cheese</option>
          <option value="mozarella">Mozarella</option>
          <option value="parmigiano">Parmigiano</option>
        </select>
      </div>
      <button>Next</button>
    </form>
  );
};