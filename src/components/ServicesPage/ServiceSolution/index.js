import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SolutionWrapper,
  SolutionContainer,
  ContentText,
  ContentSolutionWrapper,
  ContentSolution,
  SolutionText,
} from "./SolutionStyle";

const ServiceSolution = ({ SolutionData, }) => {
  
  return (
    <SolutionWrapper>
      <SolutionContainer>
        <ContentText>
          We have developed digital solutions for clients from many different
          industries
        </ContentText>
        <ContentSolutionWrapper>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 120,
              },
              444: {
                slidesPerView: 2,
                spaceBetween: 110,
              },
              569: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {SolutionData.map((data, index) => {
              return (
                <SwiperSlide>
                  <ContentSolution key={index} bg={data.backg}>
                  
                    <SolutionText>{data.name}</SolutionText>
                  </ContentSolution>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </ContentSolutionWrapper>
      </SolutionContainer>
    </SolutionWrapper>
  );
};

export { ServiceSolution };
