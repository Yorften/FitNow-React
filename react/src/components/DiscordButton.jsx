import { Button } from "flowbite-react";

export default function DiscordButton() {
  return (
    <div className='flex md:order-2'>
      <Button href='/login' className='bg-blue-600 enabled:hover:bg-blue-700'>
        Get started
      </Button>
    </div>
  );
}
