import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function DrawerDefault({ open, setOpen }) {

  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>

      <Drawer
        placement="right"
        open={open} onClose={closeDrawer} className="p-4 bg-black">
        <div className="mb-6 text-end ">

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>
        </div>
        <ul className=" pl-4 " >
          <li>
            <a href="https://twitter.com/Bernard_O1" onClick={closeDrawer} className=" f-f-m text-tiny text-black-dark  " >
              Twitter
            </a>
          </li>
       
          <li className=" mt-6 " >
            <a href="#Audit" onClick={closeDrawer} className=" f-f-m text-tiny text-black-dark  " >
              Projects
            </a>
          </li>
          <li className=" mt-6 " >
            <a  href="" className=" f-f-m text-tiny text-black-dark  " >
             Telegram
            </a>
          </li>
          <li className=" mt-6 " >
            <a href="https://github.com/BernardOnuh" onClick={closeDrawer} className=" f-f-m text-tiny text-black-dark  " >
              Github
            </a>
          </li>
        </ul>
      </Drawer>
    </React.Fragment>
  );
}
