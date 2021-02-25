import React from "react";

import { SubServiceDetail, ServiceDetail, SiteExamples } from "../../common";
import {
  Wrapper,
  Container,
  TabsContainer,
  TabsContent,
  ServiceTitle,
  ServiceContainer,
} from "./serviceStyle";
const ServiceLists = ({ TabData, serviceData }) => {
  return (
    <Wrapper>
      <Container>
        <ServiceTitle>Our Services</ServiceTitle>
        <TabsContainer>
          {TabData.map((data, index) => {
            return (
              <TabsContent
                key={index}
                to={data.ServiceType}
                smooth={true}
                spy={true}
                exact={true}
                offset={-80}
              >
                {data.ServiceType}
              </TabsContent>
            );
          })}
        </TabsContainer>
        {serviceData.map((data, index) => {
          return (
            <ServiceContainer>
              <ServiceDetail serviceData={data} />

              <SubServiceDetail
                type={data.serviceType}
                title={data.serviceDetailTitle}
                serviceDetails={data.serviceDetail}
              />
            </ServiceContainer>
          );
        })}

<SiteExamples/>
      </Container>
    </Wrapper>
  );
};

export { ServiceLists };
