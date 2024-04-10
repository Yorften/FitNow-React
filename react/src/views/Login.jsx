import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, Navigate } from "react-router-dom";
import { useRef, useContext } from "react";
import axiosClient from "../axios-client";
import Swal from "sweetalert2";
import { StateContext } from "../contexts/ContextProvider";

export default function Login() {
  const { token } = useContext(StateContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser, setToken } = useContext(StateContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        if (data.message) {
          Swal.fire({
            title: "Error!",
            html: data.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
        setToken(data.token);
        setUser(data.user);
      })
      .catch((err) => {
        const data = err.response.data;
        let errorsHtml = "";
        for (const errorKey in data.errors) {
          errorsHtml += `<ul class="error-list">`;
          errorsHtml += `<li>${data.errors[errorKey][0]}</li>`;
          errorsHtml += `</ul>`;
        }
        Swal.fire({
          title: "Error!",
          html: errorsHtml,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  if (token) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className='mx-auto w-[90%] flex items-center justify-center py-20'>
      <form className='flex max-w-md w-full flex-col gap-4' onSubmit={onSubmit}>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Your email' />
          </div>
          <TextInput
            ref={emailRef}
            id='email'
            type='email'
            placeholder='name@flowbite.com'
            autoComplete='email'
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Your password' />
          </div>
          <TextInput
            ref={passwordRef}
            id='password'
            type='password'
            autoComplete='current-password'
          />
        </div>
        <Link className='underline w-fit' to={"/register"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account? Register
        </Link>
        <div className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Label htmlFor='remember'>Remember me</Label>
        </div>
        <Button className='bg-blue-600 enabled:hover:bg-blue-700' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
