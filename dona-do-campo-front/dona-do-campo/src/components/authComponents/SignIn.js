import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { postSignIn } from "../../service/donaDoCampo";
import Painel from "../../assets/images/Painel.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabledInput, setDisabledInput] = useState(false);

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    const body = {
      email,
      password,
    };

    postSignIn(body)
      .then((res) => {
        resetForm();
        setDisabledInput(false);
        localStorage.setItem("perfilImage", JSON.stringify(res.data.urlImage));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", JSON.stringify(res.data.userId));
        navigate("/registration");
      })
      .catch((res) => {
        if (res.message === "Network Error") {
          resetForm();
          alert(
            `Error submitting request, please try again later. (${res.message})`
          );
          setDisabledInput(false);
          return;
        }

        if (res.response.status === 401) {
          resetForm();
          alert(
            `Your email or password is incorrect, please enter again. (${res.response.status} - ${res.response.data})`
          );
          setDisabledInput(false);
          return;
        }
        resetForm();
        alert(
          `Something went wrong, try again. (${res.response.status} - ${res.response.data})`
        );
        setDisabledInput(false);
      });
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <Container>
      <Wrapper>
        <AuthBox>
          <form onSubmit={sendForm}>
            <FormContent>
              <input
                type="email"
                name="email"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={disabledInput}
              />

              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={disabledInput}
              />
              <Button
                data-back="OK"
                data-front="Entrar"
                disabled={disabledInput}
              ></Button>
              <Link to="/">
                <p> Home</p>
              </Link>
            </FormContent>

            {/*  */}
          </form>
        </AuthBox>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Painel});
  background-size: 100vw;

  /* display: flex;
flex-wrap: wrap;
justify-content: center; */
`;
const Wrapper = styled.div`
  img {
    width: 100vw;
    opacity: 0.8;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

const AuthBox = styled.div`
  /* background-color: #14a652;
 
  position: fixed;
  right: 0;
  bottom: 0;
  width: 45vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30% 0% 30% 0%;

  p {
    text-align: center;
    margin-top: 20px;
    color: #3a0088;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: initial;
    padding-top: 3vh;
  } */
  /* 
  width: 50vw;
  height: 10vh;
  background-color: yellow;
  position: relative;
  bottom: 0; */

  width: 50vw;
  height: 10vh;
  position: absolute;
  bottom: 0;
  left: 25vw;
`;

const FormContent = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  p{
    color: white;
  }
  input {
    width: 20vw;
    height: 8vh;
    margin-bottom: 10px;
    border-radius: 15px;
    border: 1px solid #14a652;
    font-weight: 500;
    font-family: "Amatic";
    color: #14a652;
    font-size: 1.3rem;
    padding-left: 1.1rem;
  }

  input:focus {
    outline-color: black;
  }

  input::placeholder {
    color: gray;
    font-weight: 700;
    font-family: "Amatic", sans-serif;
    font-size: 1.2rem;
  }

  @media (max-width: 650px) {
    width: 100%;
    align-items: center;

    input {
      height: 50px;
      width: 70vw;
      font-size: 1.1rem;
    }

    input::placeholder {
      font-size: 1.1rem;
    }
  }
`;

const Button = styled.button`
 opacity: 1;
  outline: 0;
  background-color: black;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  font-family: "Amatic", sans-serif;
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 650px) {
    width: 70%;
    height: 8vh;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    line-height: 50px;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    color: #FFF;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #14a652;
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
    border: none;
    border-radius: 15px;
    font-size: 1rem;

    @media (max-width: 650px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &:before {
    line-height: 50px;
    top: 0;
    left: 0;
    opacity: 1;
    color: #ffffff;
    display: block;
    transition: 0.5s;
    position: relative;
    background: black;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
    border: none;
    font-size: 1rem;
    border-radius: 15px;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  font-size: 1.5rem;
  color: #3a0088;
  font-weight: 500;
`;

export { AuthBox, FormContent, Button };
