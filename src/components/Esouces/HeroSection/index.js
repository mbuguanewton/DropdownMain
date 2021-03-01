import React from 'react'
import {
  SHeroWrapper,
  SHeroContainer,
  TextContentWrap,
  TextContentHead,
  TextContent,
  
} from "./style";
const EsourcesHeroSection = () => {
    return (
      <SHeroWrapper>
        <SHeroContainer>
          <TextContentWrap>

            <TextContentHead>Explore and learn</TextContentHead>

            <TextContent>Download e-books, guides & more...</TextContent>
            
          </TextContentWrap>
        </SHeroContainer>
      </SHeroWrapper>
    );
}

export { EsourcesHeroSection}