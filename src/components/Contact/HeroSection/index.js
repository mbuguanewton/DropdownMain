import React from "react";
import {
  SHeroWrapper,
  SHeroContainer,
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./style";
const ContactHeroSection = () => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        <TextContentWrap>
          <TextContentHead>Are you ready to do this</TextContentHead>

          <TextContent>
            Fill out this form and our team will contact you promptly to discuss
            next steps.
          </TextContent>
        </TextContentWrap>
      </SHeroContainer>
    </SHeroWrapper>
  );
};

export { ContactHeroSection };
