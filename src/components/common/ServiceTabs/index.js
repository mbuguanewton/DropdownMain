import React from 'react'
import {
  Container,
  ServiceTitle,
  TabsContainer,
  TabsContent,
} from "./tabstyles";
const ServiceTab = ({TabStyle, TabData, listStyle}) => {
    return (
      <Container>
      
        <ServiceTitle>Our Services</ServiceTitle>
        <TabsContainer listStyle={listStyle}>
          {TabData.map((data, index) => {
            return (
              <TabsContent
                tabstyle={TabStyle}
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
