import React from "react";
import LMHero from "../../../assets/Images/Foreground/LMSHero.svg";
import {Button} from '../../common';
import {
  SHeroWrapper,
  SHeroContainer,
  ImageContainer,
  ImageWrapper,
  Image,
  Frame1,
  Frame2,
  Frame3,
  TextContentWrap,
  TextContentHead,
  TextContent,
  
} from "./SHeroStyle";
const ServiceHeroSection = ({ ScreenWidth }) => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        <ImageContainer>
          <ImageWrapper resize={ScreenWidth}>
            <Image src={LMHero} resize={ScreenWidth} />
            <Frame1 resize={ScreenWidth} />
            <Frame2 resize={ScreenWidth} />
            <Frame3 resize={ScreenWidth} />
          </ImageWrapper>
        </ImageContainer>

        <TextContentWrap>
          <TextContentHead>
            All-inclusive software &<br/> Web development services
          </TextContentHead>
          <TextContent>
            From Consulting & Discovery sessions, through Web & PWA development
            to Mobile development.
          </TextContent>
         <Button Btext={'Get A Estimate'}/>
        </TextContentWrap>
      </SHeroContainer>
    </SHeroWrapper>
  );
};

export { ServiceHeroSection };
