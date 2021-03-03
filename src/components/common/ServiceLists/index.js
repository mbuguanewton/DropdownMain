import React from "react";
import { Wrapper, Container, ServiceContainer } from "./serviceStyles";
import {
  ServiceTab,
  SubServiceDetail,
  ServiceDetail,
  SiteExamples,
  ServiceButton,
} from "../../common";
const Lists = ({ TabStyle, TabsData, serviceData, listStyle }) => {
    
  return (
    <Wrapper>
      <Container>
        <ServiceTab
          TabStyle={TabStyle}
          listStyle={listStyle}
          TabData={TabsData}
        />

        {serviceData.map((data, index) => {
          return (
            <ServiceContainer id={data.Title}>
              <ServiceDetail checkId={index} serviceData={data} />

              <SubServiceDetail
                type={data.serviceType}
                title={data.serviceDetailTitle}
                serviceDetails={data.serviceDetail}
              />

              {data.BottomButton && (
                <ServiceButton
                  Head={data.BottomButtonHead}
                  BtnText={data.BottomButtonText}
                />
              )}
            </ServiceContainer>
          );
        })}

        <SiteExamples />
      </Container>
    </Wrapper>
  );
};

export { Lists };
