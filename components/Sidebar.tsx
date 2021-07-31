import { IconButton } from "@chakra-ui/react";
import React from "react";
import {
  AiFillFacebook,
  AiFillMessage,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="h-screen w-full col-span-1 border-r flex flex-col">
      <div>
        <a href="/">
          <img className="w-4/5 my-10 mx-auto" src="/logo.svg" alt="" />
        </a>
      </div>

      <div className="w-4/5 my-10 mx-auto divide-y text-center flex-grow">
        <a
          className="block text-md uppercase py-2 hover:bg-gray-200 hover:text-primary"
          href="#"
        >
          consectetur
        </a>
        <a
          className="block text-md uppercase py-2 hover:bg-gray-200 hover:text-primary"
          href="#"
        >
          elit
        </a>
        <a
          className="block text-md uppercase py-2 hover:bg-gray-200 hover:text-primary"
          href="#"
        >
          Ipsam
        </a>
        <a
          className="block text-md uppercase py-2 hover:bg-gray-200 hover:text-primary"
          href="#"
        >
          Lorem ipsum
        </a>
      </div>

      <a href="tel:1900000000" className="flex mb-10">
        <div className="flex justify-center items-center mx-auto bg-primary text-gray-200 px-4 py-2 rounded-md">
          <FaPhoneAlt className="mr-2" />
          1900 000 000
        </div>
      </a>

      <div className="w-4/5 mx-auto mb-10 flex items-center justify-center gap-2">
        <IconButton
          variant="solid"
          colorScheme="facebook"
          aria-label="Call Sage"
          fontSize="20px"
          size="sm"
          isRound={true}
          icon={<AiFillFacebook />}
        />
        <IconButton
          variant="solid"
          colorScheme="messenger"
          aria-label="Call Sage"
          fontSize="20px"
          size="sm"
          isRound={true}
          icon={<AiFillMessage />}
        />
        <IconButton
          variant="solid"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          size="sm"
          isRound={true}
          icon={<AiFillYoutube />}
        />
        <IconButton
          variant="solid"
          colorScheme="twitter"
          aria-label="Call Sage"
          fontSize="20px"
          size="sm"
          isRound={true}
          icon={<AiFillTwitterCircle />}
        />
      </div>
    </div>
  );
}

export default Sidebar;
