import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {AiOutlineGithub} from 'react-icons/ai';
import {BiDownload} from 'react-icons/bi';
import placeholder from "../../../assets/placeholder.png";
import {
  Wrapper,
  Container,
  TabsWrapper,
  TabsContent,
  ClientContentWrapper,
  ClientContent,
  SubTitle,
  Title,
  ContentButtonWrap,
  ButtonText,
  OpenContent,
  ContentWrap,
  ContentText,
  ContentSubText,
  ButtonContent,
  BtnText,
  ButtonIcon,
} from "./styles";

const EsourceSection = ({ pressData, OpenSourceData }) => {
  const [pressActive, setPressActive] = useState(true);
  const [openSourceActive, setOpenSourceActive] = useState(false);

  const pressClicked = () => {
    if (pressActive) {
      return;
    } else {
      setPressActive(!pressActive);
      setOpenSourceActive(!openSourceActive);
    }
  };

  const openSourceClicked = () => {
    if (openSourceActive) {
      return;
    } else {
      setOpenSourceActive(!openSourceActive);
      setPressActive(!pressActive);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TabsWrapper>
          <TabsContent active={pressActive} onClick={pressClicked}>
            PRESS & CORPORATE
          </TabsContent>
          <TabsContent active={openSourceActive} onClick={openSourceClicked}>
            OPEN SOURCE
          </TabsContent>
        </TabsWrapper>

        <ClientContentWrapper activeState={pressActive}>
          {pressData.map((data, index) => {
            return (
              <ClientContent>
                <LazyLoadImage
                  effect="blur"
                  placeholderSrc={placeholder}
                  className="image"
                  src={data.pressCover}
                />
                <SubTitle>Press & Corporate</SubTitle>
                <Title>{data.title}</Title>
                <ContentButtonWrap>
                  <ButtonText>{data.buttontext}</ButtonText>
                  <ButtonIcon>
                    <BiDownload />
                  </ButtonIcon>
                </ContentButtonWrap>
              </ClientContent>
            );
          })}
        </ClientContentWrapper>

        <ClientContentWrapper activeState={openSourceActive}>
          {OpenSourceData.map((data, index) => {
            return (
              <OpenContent>
               
                    <ContentWrap>
                    <ContentText>{data.title}</ContentText>
                    <ContentSubText>{data.subtext}</ContentSubText>
                    <ButtonContent>
                    <AiOutlineGithub/>
                    <BtnText>View on Github</BtnText>
                    </ButtonContent>
                    </ContentWrap>
                
              </OpenContent>
            );
          })}
        </ClientContentWrapper>
      </Container>
    </Wrapper>
  );
};

export { EsourceSection };
