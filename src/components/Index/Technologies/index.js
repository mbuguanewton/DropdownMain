import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFlip } from "swiper";
import "swiper/swiper-bundle.css";
import {
  TechWrapper,
  TechTitle,
  TechContainer,
  TechImageWrap,
  TechImage,
  SliderContentWrap,
  SliderCard,
  SliderCardContent,
  SliderHead,
  SliderText,
  SliderNavigation,
  SliderLeft,
  SliderRight,
  NavigationWrapper,
} from "./techstyles";

SwiperCore.use([Navigation, EffectFlip]);
const TechSection = ({ LogoData, leftCalc, InfoData }) => {
  const [prevColor, setPrevColor] = useState("grey");
  const [opacityPrev, setOpacityPrev] = useState('0.3');
  const [nextColor, setNextColor] = useState("#264d2d");
  const [opacityNext, setOpacityNext] = useState('1');
  const length = InfoData.length;

  const changeColor =(slide)=>{
    if(slide.realIndex < length - 1 && slide.realIndex !== length - 1 && slide.realIndex !== 0){
      setPrevColor("#264d2d");
      setOpacityPrev('1');
    } else if(slide.realIndex === length - 1){
      setOpacityNext('0.3');
      setNextColor("grey");

    } else {
      setOpacityPrev("0.3");
      setPrevColor("grey");
      setNextColor("#264d2d");
      setOpacityNext('1');
    }
  }
  

  return (
    <TechWrapper>
      <TechTitle>Technologies & Tools</TechTitle>
      <TechContainer>
        {LogoData.map((data, index) => {
          return (
            <TechImageWrap
              area={data.type}
              SouterWidth={data.SouterWidth}
              SouterHeight={data.SouterHeight}
              leftCalc={leftCalc}
              smSizeLeft={data.smSizeLeft}
              smSizetop={data.smSizetop}
              mediumSizetop={data.mediumSizetop}
              mediumSizeLeft={data.mediumSizeLeft}
            >
              <TechImage
                src={data.image}
                alt={data.type}
                Swidth={data.Swidth}
                Sheight={data.Sheight}
              />
            </TechImageWrap>
          );
        })}

        <SliderContentWrap>
          <Swiper
            className="swiper-container"
            effect="flip"
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            onSlideChange={changeColor}
          >
            {InfoData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <SliderCard>
                    <SliderCardContent>
                      <SliderHead>{data.title}</SliderHead>
                      <SliderText>{data.text}</SliderText>
                    </SliderCardContent>
                  </SliderCard>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <SliderNavigation>
            <NavigationWrapper>
              <SliderLeft
                className="prev"
                PrevColor={prevColor}
                opacityPrev={opacityPrev}
              >
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.2342 0.790815C4.29866 0.818083 4.35721 0.858048 4.4065 0.908419C4.45591 0.958664 4.49511 1.01835 4.52186 1.08407C4.5486 1.14978 4.56237 1.22023 4.56237 1.29137C4.56237 1.36252 4.5486 1.43297 4.52186 1.49868C4.49511 1.56439 4.45591 1.62408 4.4065 1.67433L2.12855 3.99573H15.1582C15.2989 3.99573 15.4338 4.05272 15.5333 4.15416C15.6328 4.25559 15.6887 4.39317 15.6887 4.53662C15.6887 4.68007 15.6328 4.81765 15.5333 4.91909C15.4338 5.02052 15.2989 5.07751 15.1582 5.07751H2.12833L4.4065 7.39914C4.50612 7.50071 4.56209 7.63846 4.56209 7.7821C4.56209 7.92573 4.50612 8.06349 4.4065 8.16505C4.30687 8.26662 4.17175 8.32367 4.03086 8.32367C3.88996 8.32367 3.75484 8.26662 3.65522 8.16505L0.471821 4.91969C0.422412 4.86944 0.383211 4.80975 0.356463 4.74404C0.329716 4.67833 0.315948 4.60788 0.315948 4.53674C0.315948 4.46559 0.329716 4.39514 0.356463 4.32943C0.383211 4.26371 0.422412 4.20403 0.471821 4.15378L3.65522 0.908419C3.7045 0.858048 3.76305 0.818083 3.82751 0.790815C3.89197 0.763547 3.96107 0.749512 4.03086 0.749512C4.10064 0.749512 4.16975 0.763547 4.2342 0.790815Z"
                    fill="red"
                  />
                </svg>
              </SliderLeft>

              <SliderRight
                className="next"
                nextColor={nextColor}
                opacityNext={opacityNext}
              >
                <svg
                  width="26"
                  height="13"
                  viewBox="0 0 26 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.0599 0.42952C18.9548 0.473975 18.8593 0.539128 18.779 0.621249C18.6984 0.703162 18.6345 0.800471 18.5909 0.907604C18.5473 1.01474 18.5249 1.12959 18.5249 1.24558C18.5249 1.36156 18.5473 1.47641 18.5909 1.58355C18.6345 1.69068 18.6984 1.78799 18.779 1.8699L22.493 5.65474H1.25066C1.02126 5.65474 0.801244 5.74765 0.639029 5.91302C0.476813 6.0784 0.385681 6.3027 0.385681 6.53658C0.385681 6.77045 0.476813 6.99475 0.639029 7.16013C0.801244 7.3255 1.02126 7.41841 1.25066 7.41841H22.4928L18.779 11.203C18.6166 11.3686 18.5253 11.5932 18.5253 11.8274C18.5253 12.0615 18.6166 12.2861 18.779 12.4517C18.9414 12.6173 19.1617 12.7103 19.3914 12.7103C19.6211 12.7103 19.8414 12.6173 20.0038 12.4517L25.1937 7.1608C25.2742 7.07889 25.3382 6.98158 25.3818 6.87445C25.4254 6.76731 25.4478 6.65246 25.4478 6.53647C25.4478 6.42049 25.4254 6.30563 25.3818 6.1985C25.3382 6.09137 25.2742 5.99406 25.1937 5.91215L20.0038 0.621249C19.9234 0.539128 19.828 0.473975 19.7229 0.42952C19.6178 0.385065 19.5052 0.362183 19.3914 0.362183C19.2776 0.362183 19.165 0.385065 19.0599 0.42952Z"
                    fill="#264D2D"
                  />
                </svg>
              </SliderRight>
            </NavigationWrapper>
          </SliderNavigation>
        </SliderContentWrap>
      </TechContainer>
    </TechWrapper>
  );
};

export default TechSection;
