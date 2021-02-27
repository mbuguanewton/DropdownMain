import React from "react";

import { Button } from "../../common";
import {
  SHeroWrapper,
  SHeroContainer,
  
  TextContentWrap,
  TextContentHead,
  TextContent,
} from "./styles";
const BrandingHeroSection = () => {
  return (
    <SHeroWrapper>
      <SHeroContainer>
        

        <TextContentWrap>
          <TextContentHead>
            Brands are business tools that drive value....
          </TextContentHead>
          <TextContent>
            We design personal or professional brands. Our data-driven approach
            helps you transform your brand to accelerate growth and impress your
            customers with your unique brand online, build customer trust, and
            boost your reputation.
          </TextContent>
          <Button Btext={"Get A Estimate"} />
        </TextContentWrap>
      </SHeroContainer>
    </SHeroWrapper>
  );
};

export { BrandingHeroSection };
