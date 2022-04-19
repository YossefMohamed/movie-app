import Image from "next/image";
import React from "react";
import { BsBookmark } from "react-icons/bs";
import { MdMovie } from "react-icons/md";

function Card() {
  return (
    <div className="py-5 w-full  flex flex-col font-poppins cursor-pointer text-text-dark rounded-2xl opacity-95 hover:opacity-100 relative">
      <div className=" w-full z-0 h-[90%] rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1650299838813-b28de4d66c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
          layout="responsive"
          width={10}
          height={10}
          objectFit="cover"
        />
      </div>
      <div className="absolute right-10 top-10 p-5 hover:bg-secondary-dark text-4xl rounded-full">
        <span>
          <BsBookmark />
        </span>
      </div>
      <div className="p-5 mt-auto  flex-1">
        <h2 className="text-xl font-bold flex items-center gap-5 opacity-75">
          <div className="year">2019</div>
          <div className="type flex items-center gap-2">
            <MdMovie /> Movie
          </div>
          <div className="cat">PG</div>
        </h2>

        <h1 className="text-4xl font-bold">The Lion King</h1>
      </div>
    </div>
  );
}

export default Card;
