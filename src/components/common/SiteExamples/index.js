import React from "react";
import {Button} from '../../common';
import {
  Wrapper,
  Container,
  TextWrapper,
  TextContent,
  SubText,
  ImageWrapper,
} from "./sitestyles";
const SiteExamples = () => {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <TextContent>
            “We don't just build websites, we build websites that SELLS”
          </TextContent>
          <SubText>Examples of what your website could look like.</SubText>
        </TextWrapper>

        <Button Btext="Get  Estimate" />

        <ImageWrapper>
          <img
            src="https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Frame_63-min_8UpUhK40Hu.png"
            alt="Locifoods"
          />

          <img
            src="https://ik.imagekit.io/dk30bxu4rix/Website/assets/images/Services/Frame_69-min_8SBgsZPm1G.png"
            alt="LMS"
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
};

export  {SiteExamples};
