import React from 'react'
import {
  Container,
  ServiceTitle,
  TabsContainer,
  TabsContent,
} from "./tabstyles";
const ServiceTab = ({TabData}) => {
    return (
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
      </Container>
    );
}

export  {ServiceTab};
