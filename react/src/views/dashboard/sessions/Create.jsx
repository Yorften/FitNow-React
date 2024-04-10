import { useRef } from "react";
import axiosClient from "../../../axios-client";
import Swal from "sweetalert2";
import { Button, Label, TextInput } from "flowbite-react";

export default function Index() {
  const nameRef = useRef();
  const weightRef = useRef();
  const heightRef = useRef();
  const chestRef = useRef();
  const waistRef = useRef();
  const hipsRef = useRef();
  const distanceRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      weight: weightRef.current.value,
      height: heightRef.current.value,
      chest_measurement: chestRef.current.value,
      waist_measurement: waistRef.current.value,
      hips_measurement: hipsRef.current.value,
      distance_run: distanceRef.current.value,
    };

    axiosClient
      .post("/sessions", payload)
      .then(({ data }) => {
        Swal.fire({
          title: "Success!",
          html: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        console.log(err);
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

  return (
    <>
      <div className='text-3xl'>Add Session</div>
      <div className='mx-auto w-[90%] flex items-center justify-center py-20'>
        <form
          className='flex max-w-md w-full flex-col gap-4'
          onSubmit={onSubmit}
        >
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Session Name' />
            </div>
            <TextInput ref={nameRef} id='name' autoComplete='name' shadow />
          </div>
          <div className='flex justify-between'>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='weight' value='Weight' />
              </div>
              <TextInput
                type='number'
                ref={weightRef}
                id='weight'
                placeholder='Meters'
                autoComplete='weight'
                shadow
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='height' value='Height' />
              </div>
              <TextInput
                type='number'
                ref={heightRef}
                id='height'
                placeholder='Kg'
                autoComplete='height'
                shadow
              />
            </div>
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='chest' value='Chest Measurment' />
            </div>
            <TextInput
              type='number'
              ref={chestRef}
              placeholder='Cm'
              id='chest'
              autoComplete='chest'
              shadow
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='waist' value='Waist Measurment' />
            </div>
            <TextInput
              type='number'
              ref={waistRef}
              placeholder='Cm'
              id='waist'
              autoComplete='waist'
              shadow
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='hips' value='Hips Measurment' />
            </div>
            <TextInput
              type='number'
              ref={hipsRef}
              placeholder='Cm'
              id='hips'
              autoComplete='hips'
              shadow
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='distance' value='Distance Run' />
            </div>
            <TextInput
              type='number'
              ref={distanceRef}
              id='distance'
              placeholder='Meters'
              autoComplete='distance'
              shadow
            />
          </div>
          <Button
            className='bg-blue-600 enabled:hover:bg-blue-700'
            type='submit'
          >
            Add Session
          </Button>
        </form>
      </div>
    </>
  );
}
