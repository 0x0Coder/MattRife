import React from "react";
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from '/mattlive.png'

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24">
            <path fill="currentColor" 
            d="m12.707 2.293l9 9c.63.63.184 1.707-.707 1.707h-1v6a3 3 0 0 1-3 3h-1v-7a3 3 0 0 0-2.824-2.995L13 12h-2a3 3 0 0 0-3 3v7H7a3 3 0 0 1-3-3v-6H3c-.89 0-1.337-1.077-.707-1.707l9-9a1 1 0 0 1 1.414 0M13 14a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883-.993L11 14z"/></svg>
           <NavLink to='/' exact  style={({ isActive,}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#e4cb86" : "",
      };
      }}
      >
          <a  className="flex items-center">
            Home
          </a>
          </NavLink>
        </Typography>
       
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="1em"
       height="1em"
        viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42a3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.6 23.6 0 0 0-5.71 9.24a23.66 23.66 0 0 1-14.95 15a23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22a46.69 46.69 0 0 1 65.84 65.84a3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25a23.66 23.66 0 0 1 14.95-15a23.6 23.6 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22a46.7 46.7 0 0 1-63.42-2.32Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m250.5 140.44l-16.51-16.51m60.53 60.53l-11.01-11m55.03 55.03l-11-11.01m60.53 60.53l-16.51-16.51"/></svg>
            <NavLink to='/events'   style={({ isActive,}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#e4cb86" : "",
          };
          }}
          >
          <a href="#" className="flex items-center">
            Book A Ticket
          </a>
          </NavLink>
        </Typography>
       
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
         <svg xmlns="http://www.w3.org/2000/svg" 
         width="1em" 
         height="1em" 
         viewBox="0 0 14 14"><g fill="currentColor">
        <path d="M7.5 13.499v-5.25a1.25 1.25 0 0 1 2.5 0v2.75h2a2 2 0 0 1 2 2v.5"/><path fill-rule="evenodd" d="M.031 4.424A4.423 4.423 0 1 1 8.676 5.75A2.5 2.5 0 0 0 6.25 8.249v.219A4.423 4.423 0 0 1 .031 4.424m4.423-3.238c.346 0 .625.28.625.625v.283a1.5 1.5 0 0 1 1.077.96a.625.625 0 1 1-1.179.417a.25.25 0 0 0-.232-.164H4.07a.153.153 0 0 0-.032.302l1.027.224a1.497 1.497 0 0 1 .014 2.921v.284a.625.625 0 0 1-1.25 0v-.283a1.5 1.5 0 0 1-1.076-.96a.625.625 0 0 1 1.179-.417a.25.25 0 0 0 .232.164h.581a.247.247 0 0 0 .052-.487L3.771 4.83a1.403 1.403 0 0 1 .058-2.753v-.266c0-.346.28-.625.625-.625M7.5 8.249v5.75H14v-1a2 2 0 0 0-2-2h-2v-2.75a1.25 1.25 0 0 0-2.5 0" clip-rule="evenodd"/></g></svg>
        <NavLink to='https://bitorigin.ltd/'   style={({ isActive,}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#e4cb86" : "",
          };
          }}
          >
          <a href="https://bitorigin.ltd/" className="flex items-center">
            Investments
          </a>
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24">
        <path fill="currentColor" d="M16 2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3 6h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94l8-2.5v-1c0-1.66-1.34-3-3-3M5 20H3v-7h2zm8.97.41L7 18.5V13h1.61l5.82 2.17c.34.13.57.46.57.83c0 0-2-.05-2.3-.15l-2.38-.79l-.63 1.9l2.38.79c.51.17 1.04.25 1.58.25H19c.39 0 .74.24.9.57z"/></svg>
        <NavLink to='/donations'   style={({ isActive,}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#e4cb86" : "",
          };
          }}
          >
          <a href="" className="flex items-center">
            Donations
          </a>
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"><path fill="currentColor" d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"/></svg>
        <NavLink to='/faq'   style={({ isActive,}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#e4cb86" : "",
          };
          }}
          >
          <a href="#" className="flex items-center">
            FAQ
          </a>
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium hover:text-white focus:text-white text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"><path fill="currentColor" d="M13.17 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M12 10c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43z"/></svg>
            <NavLink to='/contact'   style={({ isActive,}) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "#e4cb86" : "",
          };
          }}
          >
          <a href="#" className="flex items-center">
            Contact Us
          </a>
          </NavLink>
        </Typography>
      </ul>
    );
  
  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 bg-secondary text-white">
    <div className="container mx-auto flex items-center justify-between ">
 
      <img src={logo} className='w-28'/>
      <div className="hidden lg:block ">{navList}</div>
     
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <MobileNav open={openNav}>
      <div className="container mx-auto hover:text-white focus:text-white">
        {navList}
       
      </div>
    </MobileNav>
  </Navbar>
  )
}

export default NavBar