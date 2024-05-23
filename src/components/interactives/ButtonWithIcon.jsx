import React from "react";

export default function ButtonWithIcon({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-around transition rounded-[40px] px-[30px] py-[16px] bg-black hover:bg-white text-white hover:text-black hover:border-black hover:border-solid border-[1px] border-black`}
    >
      <div className="flex items-center text-center gap-[20px]">
        <div className="">{icon}</div>
        <p className="flex items-center text-paragraph4 font-mainFont">
          {label}
        </p>
      </div>
    </button>
  );
}
