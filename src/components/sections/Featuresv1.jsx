import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCasas from "../../assets/imgs/features/house.jpg";
import imgAps from "../../assets/imgs/features/apartment.jpg";
import imgTerrenos from "../../assets/imgs/features/land.webp";
import imgPontos from "../../assets/imgs/features/business.jpg";

export default function Featuresv1() {
  return (
    <SectionArea className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Trabalhamos com todos os tipos de imóveis"
        sectionHeaderSubtitle="Temos diversas opções imobiliárias que se encaixam perfeitamente no seu futuro"
      />
      <SectionWrapper>
        <div
          className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]"
          id="service"
        >
          <FeatureImgOnBgCard
            bgImg={imgCasas}
            title="Casas"
            description="Descubra a casa dos seus sonhos!"
          />
          <FeatureImgOnBgCard
            bgImg={imgAps}
            title="Apartamentos"
            description="Praticidade em nossos apartamentos sofisticados."
          />
          <FeatureImgOnBgCard
            bgImg={imgTerrenos}
            title="Terrenos"
            description="Construa a realidade que você deseja em nossos terrenos bem localizados."
          />
          <FeatureImgOnBgCard
            bgImg={imgPontos}
            title="Pontos Comerciais"
            description="Posicione seu negócio para o sucesso!"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
