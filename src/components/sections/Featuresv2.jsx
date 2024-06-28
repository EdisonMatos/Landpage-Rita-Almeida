import React, { useState } from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import FeatureCard from "../cards/FeatureCard";
import imgRent from "../../assets/imgs/features/niceHouse.jpg";
import imgValuation from "../../assets/imgs/features/evaluation.jpg";
import imgDocs from "../../assets/imgs/features/docs.jpg";

export default function Featuresv2() {
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
          />
          <FeatureCard
            img={imgValuation}
            title="Avaliação"
            description="Realizamos avaliações precisas que captam o verdadeiro valor do seu imóvel, preparando-o para uma oferta ideal."
          />
          <FeatureCard
            img={imgDocs}
            title="Negociação e Documentação"
            description="Facilitamos todo o processo de documentação e conduzimos negociações eficazes para assegurar uma transação tranquila e vantajosa."
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
