import React from "react";
import {
  ServicesWrapper,
  ServiceTitle,
  ServicesContainer,
  ContentWrapper,
  ContentTitle,
  ContentImage,
  ContentDetails,
  ContentDetailText,
  ContentDetailServices,
  ContentDetailButton,
  DetailButton,
  ServicesContentWrapper,
  Wrapper
} from "./ServiceStyle";
const ServicesSection = ({ serviceData }) => {
  return (
    <ServicesWrapper>
    <Wrapper>
     <ServiceTitle>Services</ServiceTitle>
      <ServicesContainer>
        {serviceData.map((data, index) => {
          return (
            <ContentWrapper key={data.id}>
              <ContentTitle>{data.title}</ContentTitle>

              <ContentImage
                background={data.background}
                type={data.type}
              ></ContentImage>
              <ContentDetails type={data.type} toptype={data.marginType}>
                <ContentDetailText type={data.marginType}>
                  {data.text}
                </ContentDetailText>
                <ServicesContentWrapper type={data.marginType}>
                  {data.services.map((service, index) => {
                    return (
                      <ContentDetailServices key={index}>
                        {service.serviceOffer}
                      </ContentDetailServices>
                    );
                  })}
                  <ContentDetailButton>
                    <DetailButton>{data.buttonText}</DetailButton>
                  </ContentDetailButton>
                </ServicesContentWrapper>
              </ContentDetails>
            </ContentWrapper>
          );
        })}
        
      </ServicesContainer>
    </Wrapper>
     
    </ServicesWrapper>
  );
};

export  {ServicesSection};
