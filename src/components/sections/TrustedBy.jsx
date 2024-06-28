import "primeicons/primeicons.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import TrustedByMore from "./TrustedByMore.jsx";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import LogoDisplay from "../sectionElements/LogoDisplay";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import trustedByImg1 from "../../assets/imgs/trustedBy/trustedBy1.png";
import trustedByImg2 from "../../assets/imgs/trustedBy/trustedBy2.png";
import trustedByImg3 from "../../assets/imgs/trustedBy/trustedBy3.png";
import trustedByImg4 from "../../assets/imgs/trustedBy/trustedBy4.png";
import trustedByImg5 from "../../assets/imgs/trustedBy/trustedBy5.png";
import trustedByImg6 from "../../assets/imgs/trustedBy/trustedBy6.png";

const images = [
  {
    src: trustedByImg1,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg2,
    alt: "trustedBy2",
  },
  {
    src: trustedByImg3,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg4,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg5,
    alt: "trustedBy1",
  },
  {
    src: trustedByImg6,
    alt: "trustedBy1",
  },
];

export default function TrustedBy() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const onClick = () => {
    setModalTitle("Seguradoras que trabalhamos");
    setModalContent(
      <div>
        <TrustedByMore />
      </div>
    );
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Parceria com as maiores seguradoras"
        sectionHeaderSubtitle="Confiabilidade e excelência em proteção"
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full mb-[26px] tablet1:mb-[40px] desktop1:mb-[80px]">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
        <MotionDivDownToUp className="">
          <Paragraphs className="text-center">
            Para ver todas seguradoras que trabalhamos,{" "}
            <span
              className="transition cursor-pointer text-tertiary hover:underline"
              onClick={onClick}
            >
              clique aqui
            </span>
          </Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
