import React from 'react'
import { Button } from "../../common";
import {
  SHeroWrapper,
  SHeroContainer,
 
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./style";
const HeroWork = ({details}) => {
    return (
      <SHeroWrapper>
        <SHeroContainer>
          <TextContentWrap>
            <TextContentHead>
              {details.title}
            </TextContentHead>
            <TextContent>
           { details.text}
            </TextContent>
            <Button Btext={details.BtnText} />
          </TextContentWrap>
        </SHeroContainer>
      </SHeroWrapper>
    );
}

export { HeroWork};
