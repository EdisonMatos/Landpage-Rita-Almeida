import React from 'react';
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeatureCard(props) {
  const { img, title, description, onButtonClick } = props;

  return (
    <MotionDivDownToUp className="bg-white p-[36px] rounded-2xl desktop1:w-[30%] flex flex-col tablet1:flex-row gap-[36px] desktop1:flex-col w-full h-full">
      <img
        src={img}
        alt=""
        className=" tablet1:w-[50%] desktop1:w-full rounded-2xl"
      />
      <div className="">
        <h1 className=" font-mainFont text-[32px] tablet1:text-title3 desktop2:text-[32px] leading-[36px] mb-[16px]">
          <MotionDivDownToUp>{title}</MotionDivDownToUp>
        </h1>
        <p className=" font-secondFont text-paragraph4 mb-[36px] text-quaternary">
          <MotionDivDownToUp>{description}</MotionDivDownToUp>
        </p>
        <MotionDivDownToUp>
          <ButtonWithIcon
            label="Saiba mais"
            onClick={onButtonClick}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            }
            className="text-white bg-black px-[2%] py-[0.8%]"
          />
        </MotionDivDownToUp>
      </div>
    </MotionDivDownToUp>
  );
}
