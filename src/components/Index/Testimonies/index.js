import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectCoverflow,EffectFlip, Autoplay} from "swiper";
import "swiper/swiper-bundle.css";
import {
  Wrapper,
  TitleT,
  SubText,
  Container,
  TestimonyWrapper,
  PostImageWrapper,
  ImageContent,
  NameContent,
  CompanyContent,
  TestimonyContent,
  InsideWrapper,
  ContentWrapper,
  LogoDetails,
} from "./styles";

SwiperCore.use([ EffectCoverflow,EffectFlip, Autoplay]);
const TestimonySection = ({ TestimonyData }) => {
  return (
    <Wrapper>
      <InsideWrapper>
        <TitleT>Testimonies</TitleT>
        <SubText>What our clients say...</SubText>
        <Container>
          <Swiper
            effect="flip"
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            {TestimonyData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonyWrapper>
                    <PostImageWrapper>
                      <ImageContent src={data.profile} />
                      <NameContent>{data.Name}</NameContent>
                      <CompanyContent>{data.CompanyDetails}</CompanyContent>
                    </PostImageWrapper>
                    <ContentWrapper>
                    <LogoDetails src={data.Logo}/>
                      <TestimonyContent>{data.testimony}</TestimonyContent>
                    </ContentWrapper>
                  
                  </TestimonyWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </InsideWrapper>
    </Wrapper>
  );
};

export default TestimonySection;
