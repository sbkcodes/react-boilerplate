import React from "react";
import { useFormContext } from "react-hook-form";
import get from "lodash/get";

import Input from "../Input";

import Feedback from "./Feedback";

const Control = ({ type = "text", register, name, required, ...rest }) => {
  switch (type) {
    default:
      return <Input type={type} {...register(name, { required })} {...rest} />;
  }
};

const Field = ({ name, ...rest }) => {
  const { errors, register } = useFormContext();
  const error = get(errors, `${name}.message`);

  return (
    <>
      <Control name={name} invalid={!!error} register={register} {...rest} />
      {error && <Feedback>{error}</Feedback>}
    </>
  );
};

export default Field;
