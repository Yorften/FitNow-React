import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../../axios-client";
import Swal from "sweetalert2";

export default function Index() {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSessions();
    setLoading(true);
  }, []);

  const getSessions = () => {
    axiosClient
      .get("/sessions")
      .then(({ data }) => {
        setLoading(false);
        setSessions(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const deleteSession = (id) => {
    axiosClient
      .delete("/sessions/" + id)
      .then(({ data }) => {
        getSessions();
        Swal.fire({
          title: "Success!",
          html: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='flex items-center justify-between mb-20'>
        <div className='text-3xl'>My Sessions</div>
        <Link to={"/dashboard/sessions/create"}>
          <Button className='bg-blue-600 enabled:hover:bg-blue-700'>
            Add Session
          </Button>
        </Link>
      </div>
      <div className='overflow-x-auto'>
        <Table>
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Session Name</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Created at</Table.HeadCell>
            <Table.HeadCell>
              <span className='sr-only'>Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {sessions.map((session, index) => (
              <Table.Row
                key={index}
                className='bg-white dark:border-gray-700 dark:bg-gray-800'
              >
                <Table.Cell>{session.id}</Table.Cell>
                <Table.Cell>{session.name}</Table.Cell>
                <Table.Cell>{session.status}</Table.Cell>
                <Table.Cell>{session.created_at}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/dashboard/sessions/edit/${session.id}`}
                    className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                  >
                    Edit
                  </Link>
                  <div
                    className='font-medium text-red-600 hover:underline dark:text-red-500 cursor-pointer'
                    onClick={() => deleteSession(session.id)}
                  >
                    Delete
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
