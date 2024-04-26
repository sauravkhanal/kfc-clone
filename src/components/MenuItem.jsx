import React from "react";

function MenuItem({imageURI, name}) {
  return (
    <div className=" w-56 h-64 p-5 rounded-lg overflow-hidden bg-gray-100  hover:bg-orange-50 transition">
        <img
          src={imageURI}
          alt={name}
          className=" hover:scale-110 transition"
        />
        <p className="text-xl flex justify-center font-bold p-5 font-roboto">{name.toUpperCase()}</p>
    </div>
  );
}

export default MenuItem;
