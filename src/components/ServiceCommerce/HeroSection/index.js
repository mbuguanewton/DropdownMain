import React from "react";
import { Button } from "../../common";
import {
  SHeroWrapper,
  SHeroContainer,
  ImageContainer,
  ImageWrapper,
  Image,
  Frame2,
  Frame3,
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./styles";
const ServiceHeroSection = ({widthCheck}) => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        <ImageContainer>
          <ImageWrapper>
            <Frame2 widthset={widthCheck} />
            <Frame3 widthset={widthCheck} />
            <Image src="https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Group_488_EG2Rdb4M6W.png" />
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
