import React, { useState } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCard from "../cards/FeatureCard";
import imgRent from "../../assets/imgs/features/niceHouse.jpg";
import imgValuation from "../../assets/imgs/features/evaluation.jpg";
import imgDocs from "../../assets/imgs/features/docs.jpg";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Featuresv2() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Diferenciais e Expertise"
        sectionHeaderSubtitle="Excelência em cada transação imobiliária, garantindo segurança, confiança e satisfação em cada etapa do processo"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] desktop1:flex-row">
          <FeatureCard
            img={imgRent}
            title="Venda e Aluguel"
            description="Conte com nossa experiência para vender ou alugar seu imóvel com rapidez e segurança, garantindo a melhor oferta do mercado."
            onButtonClick={() =>
              handleButtonClick("Venda e Aluguel", "Conteúdo a ser adicionado")
            }
          />
          <FeatureCard
            img={imgValuation}
            title="Avaliação"
            description="Realizamos avaliações precisas que captam o verdadeiro valor do seu imóvel, preparando-o para uma oferta ideal."
            onButtonClick={() =>
              handleButtonClick("Avaliação", "Conteúdo a ser adicionado")

            }
          />
          <FeatureCard
            img={imgDocs}
            title="Negociação e Documentação"
            description="Facilitamos todo o processo de documentação e conduzimos negociações eficazes para assegurar uma transação tranquila e vantajosa."
            onButtonClick={() =>
              handleButtonClick(
                "Negociação e Documentação",
                "Conteúdo a ser adicionado"

              )
            }
          />
        </div>
      </SectionWrapper>
      <Dialog className=" font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
