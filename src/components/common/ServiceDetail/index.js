import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../assets/placeholder.png";
import {
  TopWrapper,
  ImageWrapper,
  ContentDetailWrapper,
  ContentWrapper,
  ContentText,
  ContentMainTextWrapper,
  ContentMainText,
  ContentSubDetailWrapper,
  ContentSubText,
} from "./serviceStyle";
const ServiceDetail = ({serviceData, checkId}) => {
  
    return (
      <TopWrapper>
        <ImageWrapper picFalse={serviceData.displayfalse}>
          {serviceData.changeSize ? (
            <LazyLoadImage
              effect="blur"
              placeholderSrc={placeholder}
              className="image"
              id={"img" + checkId}
              src={serviceData.mainImage}
              Lbg={serviceData.mainImage}
            />
          ) : (
            <LazyLoadImage
              effect="blur"
              placeholderSrc={placeholder}
              className={`image ${serviceData.ImageClass}`}
              src={serviceData.mainImage}
              Lbg={serviceData.mainImage}
            />
          )}

          <ContentDetailWrapper boxShadow={serviceData.dropShadow} bgColor={serviceData.color}>
            <ContentWrapper>
              <ContentText>{serviceData.Title}</ContentText>
            </ContentWrapper>

            <ContentMainTextWrapper>
              <ContentMainText>{serviceData.mainText}</ContentMainText>
            </ContentMainTextWrapper>
          </ContentDetailWrapper>
        </ImageWrapper>

        <ContentSubDetailWrapper>
          <ContentSubText>{serviceData.subText}</ContentSubText>
        </ContentSubDetailWrapper>
      </TopWrapper>
    );
}

export {ServiceDetail}
