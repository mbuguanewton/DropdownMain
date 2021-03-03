import React from "react";
import { Button } from "../../common";
import {
  SHeroWrapper,
  SHeroContainer,
  Frame1,
  Frame2,
  Frame3,
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./style";
const HeroWork = ({ details, widthCheck }) => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        <TextContentWrap>
          <Frame1 widthset={widthCheck} />
          <Frame2 widthset={widthCheck} />
          <Frame3 widthset={widthCheck} />

          <TextContentHead>{details.title}</TextContentHead>
          <TextContent>{details.text}</TextContent>
          <Button Btext={details.BtnText} />
        </TextContentWrap>
      </SHeroContainer>
    </SHeroWrapper>
  );
};

export { HeroWork };
