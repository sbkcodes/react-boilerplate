import React from "react";
import { useMutation } from "react-query/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../shared/Form";
import Button from "../shared/Button";
import { useAuthContext } from "../../contexts/AuthContext";

import * as S from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const { mutate, isLoading, error } = useMutation((data) =>
    axios.post("http://localhost:5000/api/login/verify", data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  );

  const handleSubmit = async (values) => {
    console.log(values);
    mutate(values, {
      onSuccess(response) {
        setUser({ ...response.data, isAuthenticated: true });
        navigate("/");
      },
    });
  };

  return (
    <S.Wrapper>
      <S.FormWrapper>
        <Form onSubmit={handleSubmit} errors={error?.response?.data}>
          <Form.Group>
            <Form.Label htmlFor="username">Email (*)</Form.Label>
            <Form.Field type="text" name="username" id="username" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password (*)</Form.Label>
            <Form.Field type="password" name="password" id="password" />
          </Form.Group>
          <Button type="submit" disabled={isLoading} extend>
            Submit
          </Button>
        </Form>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Login;
