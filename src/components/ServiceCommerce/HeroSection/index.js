import React from "react";
import LMHero from "../../../assets/Images/Foreground/LMSHero.svg";
import { Button } from "../../common";
import {
  SHeroWrapper,
  SHeroContainer,
  ImageContainer,
  ImageWrapper,
  Image,
  
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./styles";
const ServiceHeroSection = () => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        <ImageContainer>
          <ImageWrapper>
            <Image src="https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/laptop-locifoods_f-E0S_8O9.svg" />
          </ImageWrapper>
        </ImageContainer>

        <TextContentWrap>
          <TextContentHead>E‑commerce Development</TextContentHead>
          <TextContent>
            Expand your online business and sell more with modern Shopify or
            custom e‑commerce solutions.
          </TextContent>
          <Button Btext={"Get A Estimate"} />
        </TextContentWrap>
      </SHeroContainer>
    </SHeroWrapper>
  );
};

export { ServiceHeroSection };
