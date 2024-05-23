import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import bgImage from "../../assets/imgs/hero/bgHero.webp";
import whatsappNumber from "../../abstractions/whats";
import ButtonWithIcon from "../interactives/ButtonWithIcon";

const whatsappContactLink = `https://wa.me/` + `${whatsappNumber}`;

export default function HeroSection() {
  return (
    <div className="font-mainFont" id="home">
      <div
        className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      >
        <div className="flex items-center">
          <div className="w-full text-white justify-evenly pb-[30px]">
            <div className="h-[120px] phone2:h-[132px] tablet1:h-[145px] desktop3:h-[190px]" />
            <div className="flex flex-col desktop1:flex-row mx-auto mb-[40px] w-[90%] max-w-[1215px] items-center gap-10 tablet2:gap-14 desktop3:gap-20">
              <div className="desktop1:w-[850px] flex flex-col gap-8">
                <MotionDivLeftToRight>
                  <div className="font-medium leading-none text-center desktop1:text-left text-title3 phone1:text-title5 phone3:text-title6 tablet1:text-title7 desktop1:text-[66px]">
                    <h1 className="[text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                      Transformando desejos em endereços
                    </h1>
                  </div>
                </MotionDivLeftToRight>
                <MotionDivLeftToRight>
                  <div className="text-center desktop1:text-left phone1:w-full font-secondFont phone1:text-title1">
                    <p className="[text-shadow:_1.8px_1.8px_2px_rgb(0_0_0_/_150%)]">
                      Com paixão e excelência, o lar ideal é nossa
                      especialidade!
                    </p>
                  </div>
                </MotionDivLeftToRight>
                <div className="w-full phone2:w-full tablet2:w-auto">
                  <MotionDivLeftToRight>
                    <div className="flex justify-center w-full desktop1:justify-start">
                      <a href={whatsappContactLink} target="_blank">
                        <ButtonWithIcon
                          label="Consultar Imóveis"
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-whatsapp"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                          }
                        />
                      </a>
                    </div>
                  </MotionDivLeftToRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
