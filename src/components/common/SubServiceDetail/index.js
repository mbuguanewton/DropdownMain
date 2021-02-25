import React from "react";
import {
  ServiceDetailContent,
  DetailImageWrap,
  DetailImage,
  DetailTitle,
  DownWrapper,
  TitleWrapper,
} from "./subStyles";
const SubServiceDetail = ({ serviceDetails, title, type }) => {
  console.log(serviceDetails);
  return (
    <DownWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      {serviceDetails.map((data, index) => {
        return (
          <ServiceDetailContent id={index}>
            <DetailImageWrap type={type}>
              <DetailImage src={data.Image}/>
            </DetailImageWrap>

            <DetailTitle>{data.text}</DetailTitle>
          </ServiceDetailContent>
        );
      })}
    </DownWrapper>
  );
};

export { SubServiceDetail };
