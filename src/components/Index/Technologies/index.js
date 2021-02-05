import React from "react";
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
} from "./techstyles";
const TechSection = ({ LogoData, leftCalc }) => {
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
          <SliderCard>
            <SliderCardContent>
              <SliderHead>We care alot about quality</SliderHead>
              <SliderText>
                Using modern languages, frameworks and <br />
                solid development process to help businesses
                <br /> stay ahead in tech.
              </SliderText>
            </SliderCardContent>
          </SliderCard>

          <SliderNavigation>
            <SliderLeft />
            <SliderRight />
          </SliderNavigation>
        </SliderContentWrap>
      </TechContainer>
    </TechWrapper>
  );
};

export default TechSection;
