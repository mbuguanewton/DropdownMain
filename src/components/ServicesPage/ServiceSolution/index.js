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

const ServiceSolution = ({ SolutionData }) => {
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
              350: {
                slidesPerView: 2,
                spaceBetween: 130
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
