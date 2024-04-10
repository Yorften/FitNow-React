import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, Navigate } from "react-router-dom";
import { StateContext } from "../contexts/ContextProvider";
import { useRef, useContext } from "react";
import axiosClient from "./../axios-client";
import Swal from "sweetalert2";

export default function Register() {
  const { token } = useContext(StateContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const { setUser, setToken } = useContext(StateContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };

    axiosClient
      .post("/register", payload)
      .then(({ data }) => {
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
            <Label htmlFor='name' value='Your name' />
          </div>
          <TextInput ref={nameRef} id='name' autoComplete='name' shadow />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Your email' />
          </div>
          <TextInput
            ref={emailRef}
            id='email'
            placeholder='name@flowbite.com'
            autoComplete='email'
            shadow
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
            autoComplete='new-password'
            shadow
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='repeat-password' value='Repeat password' />
          </div>
          <TextInput
            ref={passwordConfirmationRef}
            id='repeat-password'
            type='password'
            autoComplete='repeat-password'
            shadow
          />
        </div>
        <Link className='underline w-fit' to={"/login"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Already have an account? Login
        </Link>
        <div className='flex items-center gap-2'>
          <Checkbox id='agree' />
          <Label htmlFor='agree' className='flex'>
            I agree with the&nbsp;
            <Link
              href='#'
              className='text-cyan-600 hover:underline dark:text-cyan-500'
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button className='bg-blue-600 enabled:hover:bg-blue-700' type='submit'>
          Register new account
        </Button>
      </form>
    </div>
  );
}
