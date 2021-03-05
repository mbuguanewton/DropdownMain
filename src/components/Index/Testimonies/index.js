import React, { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectCoverflow, Autoplay} from "swiper";
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
  SliderNavigation,
  NavigationWrapper,
  SliderLeft,
  SliderRight,
} from "./styles";

SwiperCore.use([ EffectCoverflow, Autoplay]);
const TestimonySection = ({ TestimonyData }) => {
 const [prevColor, setPrevColor] = useState("grey");
 const [opacityPrev, setOpacityPrev] = useState("0.3");
 const [nextColor, setNextColor] = useState("#264d2d");
 const [opacityNext, setOpacityNext] = useState("1");
 const length = TestimonyData.length;

  const changeColor = (slide) => {
    if (
      slide.realIndex < length - 1 &&
      slide.realIndex !== length - 1 &&
      slide.realIndex !== 0
    ) {
      setPrevColor("#264d2d");
      setOpacityPrev("1");
    } else if (slide.realIndex === length - 1) {
      setOpacityNext("0.3");
      setNextColor("grey");
    } else {
      setOpacityPrev("0.3");
      setPrevColor("grey");
      setNextColor("#264d2d");
      setOpacityNext("1");
    }
  };

  return (
    <Wrapper>
      <InsideWrapper>
        <TitleT>Testimonies</TitleT>
        <SubText>What our clients say...</SubText>
        <Container>
          <Swiper
            className="swipperContainer"
            autoplay={{
              delay: 4500,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 110,
              },
            }}
            keyboard={{
              enabled: true,
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            onSlideChange={changeColor}
          >
            {TestimonyData.map((data, index) => {
              return (
                <SwiperSlide className="slidedetails" key={index}>
                  <TestimonyWrapper>
                    <PostImageWrapper>
                      <ImageContent src={data.profile} />
                      <NameContent>{data.Name}</NameContent>
                      <CompanyContent>{data.CompanyDetails}</CompanyContent>
                    </PostImageWrapper>
                    <ContentWrapper>
                      <LogoDetails src={data.Logo} />
                      <TestimonyContent>{data.testimony}</TestimonyContent>
                    </ContentWrapper>
                  </TestimonyWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SliderNavigation>
            <NavigationWrapper>
              <SliderLeft
                className="prev"
                PrevColor={prevColor}
                opacityPrev={opacityPrev}
              >
                <svg
                  width="119"
                  height="119"
                  viewBox="0 0 119 119"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M77.8814 26.2438C79.8177 28.1801 79.8177 31.3196 77.8814 33.2559L51.6375 59.4998L77.8814 85.7438C79.8177 87.6801 79.8177 90.8196 77.8814 92.7559C75.945 94.6923 72.8056 94.6923 70.8693 92.7559L41.1193 63.0059C39.1829 61.0696 39.1829 57.9301 41.1193 55.9938L70.8693 26.2438C72.8056 24.3074 75.945 24.3074 77.8814 26.2438Z"
                    fill="#9C9FA1"
                  />
                </svg>
              </SliderLeft>

              <SliderRight
                className="next"
                nextColor={nextColor}
                opacityNext={opacityNext}
              >
                <svg
                  width="119"
                  height="119"
                  viewBox="0 0 119 119"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.8693 26.4938C42.8056 24.5574 45.945 24.5574 47.8814 26.4938L77.6314 56.2438C79.5677 58.1801 79.5677 61.3196 77.6314 63.2559L47.8814 93.0059C45.945 94.9423 42.8056 94.9423 40.8693 93.0059C38.9329 91.0696 38.9329 87.9301 40.8693 85.9938L67.1132 59.7498L40.8693 33.5059C38.9329 31.5696 38.9329 28.4301 40.8693 26.4938Z"
                    fill="#9C9FA1"
                  />
                </svg>
              </SliderRight>
            </NavigationWrapper>
          </SliderNavigation>
        </Container>
      </InsideWrapper>
    </Wrapper>
  );
};

export {TestimonySection};
