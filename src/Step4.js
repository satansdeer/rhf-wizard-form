import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseSauce } from "./rootSlice";

export const Step4 = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const sauce = useSelector(state => state.sauce)
  const { register, handleSubmit } = useForm({defaultValues: {sauce}});

  const onSubmit = (data) => {
    dispatch(chooseSauce(data.sauce));
    history.push("./result");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="sauce">Pick Sauce:</label>
        <select id="sauce" name="sauce" ref={register}>
          <option value="no_sauce">No Sauce</option>
          <option value="tomato">Tomato</option>
          <option value="spicy_tomato">Spicy Tomato</option>
        </select>
      </div>
      <button>Complete</button>
    </form>
  );
};