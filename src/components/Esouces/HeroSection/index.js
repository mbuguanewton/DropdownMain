import React from 'react'
import {
  SHeroWrapper,
  SHeroContainer,
  TextContentWrap,
  TextContentHead,
  TextContent,
  Frame1,
  Frame2,
  Frame3,
} from "./style";
const EsourcesHeroSection = ({widthCheck}) => {
    return (
      <SHeroWrapper>
        <SHeroContainer>
          <TextContentWrap>
            <Frame1 widthset={widthCheck} />
            <Frame2 widthset={widthCheck} />
            <Frame3 widthset={widthCheck} />
            <TextContentHead>Explore and learn</TextContentHead>

            <TextContent>Download e-books, guides & more...</TextContent>
          </TextContentWrap>
        </SHeroContainer>
      </SHeroWrapper>
    );
}

export { EsourcesHeroSection}