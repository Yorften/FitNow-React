import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import { Label, Select, TextInput } from "flowbite-react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  const [session, setSession] = useState({
    id: null,
    name: "",
    weight: "",
    height: "",
    chest_measurement: "",
    waist_measurement: "",
    hips_measurement: "",
    distance_run: "",
    status: "",
  });

  useEffect(() => {
    updateSession(id);
  }, [session]);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = () => {
    axiosClient
      .get("/sessions/" + id)
      .then(({ data }) => {
        setSession(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSession = (id) => {
    axiosClient.put("/sessions/" + id, session).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <div className='text-3xl'>Update Session</div>
      <div className='mx-auto w-[90%] flex items-center justify-center py-20'>
        <form className='flex max-w-md w-full flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Session Name' />
            </div>
            <TextInput
              onChange={(ev) =>
                setSession({ ...session, name: ev.target.value })
              }
              disabled={session.status === "FINISHED"}
              value={session.name}
              id='name'
              autoComplete='name'
              shadow
            />
          </div>
          <div className='flex justify-between'>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='weight' value='Weight' />
              </div>
              <TextInput
                onChange={(ev) =>
                  setSession({ ...session, weight: ev.target.value })
                }
                disabled={session.status === "FINISHED"}
                value={session.weight}
                type='number'
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
                onChange={(ev) =>
                  setSession({ ...session, height: ev.target.value })
                }
                disabled={session.status === "FINISHED"}
                value={session.height}
                type='number'
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
              onChange={(ev) =>
                setSession({ ...session, chest_measurement: ev.target.value })
              }
              disabled={session.status === "FINISHED"}
              value={session.chest_measurement}
              type='number'
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
              onChange={(ev) =>
                setSession({ ...session, waist_measurement: ev.target.value })
              }
              disabled={session.status === "FINISHED"}
              value={session.waist_measurement}
              type='number'
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
              onChange={(ev) =>
                setSession({ ...session, hips_measurement: ev.target.value })
              }
              disabled={session.status === "FINISHED"}
              value={session.hips_measurement}
              type='number'
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
              onChange={(ev) =>
                setSession({ ...session, distance_run: ev.target.value })
              }
              disabled={session.status === "FINISHED"}
              value={session.distance_run}
              type='number'
              id='distance'
              placeholder='Meters'
              autoComplete='distance'
              shadow
            />
          </div>
          <div className='max-w-md'>
            <div className='mb-2 block'>
              <Label htmlFor='status' value='Status' />
            </div>
            <Select
              onChange={(ev) =>
                setSession({ ...session, status: ev.target.value })
              }
              id='status'
              value={session.status}
            >
              <option value={"NOT FINISHED"}>NOT FINISHED</option>
              <option value={"FINISHED"}>FINISHED</option>
            </Select>
          </div>
        </form>
      </div>
    </>
  );
}
