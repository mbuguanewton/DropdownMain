import React from 'react';

import {
  TopWrapper,
  ImageWrapper,
  Image,
  ContentDetailWrapper,
  ContentWrapper,
  ContentText,
  ContentMainTextWrapper,
  ContentMainText,
  ContentSubDetailWrapper,
  ContentSubText,
} from "./serviceStyle";
const ServiceDetail = ({serviceData}) => {
    return (
      <TopWrapper>
        <ImageWrapper>
          <Image sbg={serviceData.mainImage} Lbg={serviceData.mainImage} />
        </ImageWrapper>

        <ContentDetailWrapper>
          <ContentWrapper>
            <ContentText>{serviceData.Title}</ContentText>
          </ContentWrapper>

          <ContentMainTextWrapper>
            <ContentMainText>{serviceData.mainText}</ContentMainText>
          </ContentMainTextWrapper>
        </ContentDetailWrapper>

        <ContentSubDetailWrapper>
        <ContentSubText>{serviceData.subText}</ContentSubText>
        </ContentSubDetailWrapper>
      </TopWrapper>
    );
}

export {ServiceDetail}
