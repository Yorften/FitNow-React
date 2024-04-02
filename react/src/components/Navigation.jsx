import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import DiscordButton from "./DiscordButton";
import NavProfile from "./NavProfile";
import { StateContext } from "../contexts/ContextProvider";
import { useContext, useState } from "react";

export default function Navigation() {
  const { user, token } = useContext(StateContext);

  const [stateToken, setStateToken] = useState(false);

  if (token) {
    setStateToken(true);
  }

  return (
    <Navbar className='' fluid rounded>
      <NavbarBrand href='https://flowbite-react.com'>
        <img
          src='/assets/images/icon.png'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold'>
          FitNow
        </span>
      </NavbarBrand>
      <div className='flex md:order-last'>
        {stateToken ? <NavProfile /> : <DiscordButton />}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href='#' active>
          Home
        </NavbarLink>
        <NavbarLink href='#'>About</NavbarLink>
        <NavbarLink href='#'>Services</NavbarLink>
        <NavbarLink href='#'>Pricing</NavbarLink>
        <NavbarLink href='#'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
