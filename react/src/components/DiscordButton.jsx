import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DiscordButton() {
  return (
    <div className='flex md:order-2'>
      <Link to={"/login"}>
        <Button className='bg-blue-600 enabled:hover:bg-blue-700'>
          {" "}
          Get started
        </Button>
      </Link>
    </div>
  );
}
