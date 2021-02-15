import React from "react";

import LineBg from "../../../assets/backgroundIcons/Vector 7.svg";
import {
  ProcessWrapper,
  ProcessTitle,
  ProcessContainer,
  ProcessImageWrapper,
  ProcessImage,
  ProcessContent,
  BgLineImage,
  BgImage,
  Wrapper,
  ProcessText,
  ProcessTextWrap,
} from "./processStyles";
const ProcessSection = ({ leftCalc, ProcessData }) => {
  return (
    <ProcessWrapper>
      <Wrapper>
        <ProcessTitle>Our Process</ProcessTitle>
        <ProcessTextWrap>
         <ProcessText>
          We believe that the most innovative ideas start with entrepreneurs and
          the right process.
        </ProcessText>
        </ProcessTextWrap>
       
        <ProcessContainer>
          {ProcessData.map((data, index) => {
            return (
              <ProcessImageWrapper
                mediumSizeLeft={data.mediumSizeLeft}
                mediumSizetop={data.mediumSizetop}
                LSizeLeft={data.LSizeLeft}
                LSizetop={data.LSizetop}
                leftCalc={leftCalc}
                key={index}
              >
                <ProcessImage src={data.image} />
                <ProcessContent>{data.text}</ProcessContent>
              </ProcessImageWrapper>
            );
          })}

          <BgLineImage>
            <BgImage src={LineBg} />
          </BgLineImage>
        </ProcessContainer>
      </Wrapper>
    </ProcessWrapper>
  );
};

export { ProcessSection };
