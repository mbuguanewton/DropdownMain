import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../../assets/placeholder.png";
import {
  Wrapper,
  Container,
  TabsWrapper,
  TabsContent,
  ClientContentWrapper,
  ClientContent,
  Image,
} from "./workstyles";
const WorkSection = ({ ClientWork, OurProjects }) => {
  const [clientActive, setClientActive] = useState(true);
  const [ourProjectsActive, setOurProjectsActive] = useState(false);

  const clientClicked = () => {
    if (clientActive) {
      return;
    } else {
      setClientActive(!clientActive);
      setOurProjectsActive(!ourProjectsActive);
    }
  };

  const ourProjectsClicked = () => {
    if (ourProjectsActive) {
      return;
    } else {
      setOurProjectsActive(!ourProjectsActive);
      setClientActive(!clientActive);
    }
  };
  return (
    <Wrapper>
      <Container>
        <TabsWrapper>
          <TabsContent active={clientActive} onClick={clientClicked}>
            CLIENTS WORK
          </TabsContent>
          <TabsContent active={ourProjectsActive} onClick={ourProjectsClicked}>
            OUR PROJECTS
          </TabsContent>
        </TabsWrapper>

        <ClientContentWrapper activeState={clientActive}>
          {ClientWork.map((data, index) => {
            return (
              <ClientContent>
                <LazyLoadImage
                  effect="blur"
                  placeholderSrc={placeholder}
                  className="image"
                  src={data.link}
                />
              </ClientContent>
            );
          })}
        </ClientContentWrapper>

        <ClientContentWrapper activeState={ourProjectsActive}>
          {OurProjects.map((data, index) => {
            return (
              <ClientContent>
                <LazyLoadImage
                  effect="blur"
                  placeholderSrc={placeholder}
                  className="image"
                  src={data.link}
                />
              </ClientContent>
            );
          })}
        </ClientContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default WorkSection;
