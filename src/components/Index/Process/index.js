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
} from "./processStyles";
const ProcessSection = ({ leftCalc, ProcessData }) => {
  return (
    <ProcessWrapper>
      <ProcessTitle>Our Process</ProcessTitle>
      
      <ProcessContainer>
        {ProcessData.map((data, index) => {
          return (
            <ProcessImageWrapper
              mediumSizeLeft={data.mediumSizeLeft}
              mediumSizetop={data.mediumSizetop}
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
    </ProcessWrapper>
  );
};

export default ProcessSection;
