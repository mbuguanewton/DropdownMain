import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  ServiceDetailContent,
  DetailImageWrap,
  DetailImage,
  DetailTitle,
  DownWrapper,
  TitleWrapper,
  DetailButton,
  BtnText,
  ServiceDetailWrap,
} from "./subStyles";
const SubServiceDetail = ({ serviceDetails, title, type }) => {
  console.log(serviceDetails);
  return (
    <DownWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <ServiceDetailWrap>
        {serviceDetails.map((data, index) => {
        return (
          <ServiceDetailContent id={index}>
            <DetailImageWrap type={type}>
              <DetailImage src={data.Image} />
            </DetailImageWrap>

            <DetailTitle>{data.text}</DetailTitle>
            {data.detailBtn && (
              <DetailButton to={data.BtnLink}>
                <BtnText>Learn more</BtnText> <FaArrowRight />
              </DetailButton>
            )}
          </ServiceDetailContent>
        );
      })}
      </ServiceDetailWrap>
    
    </DownWrapper>
  );
};

export { SubServiceDetail };
