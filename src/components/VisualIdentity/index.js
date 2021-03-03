import React, {  useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/placeholder.png";
import {
  Wrapper,
  Container,
  ContentWrapper,
  Content,
  ContentDetailWrapper,
  ContentHead,
  ContentTextWrap,
  ContentText,
  ContentSubText,
} from "./style";
const VisualIdentitySection = ({ Identity }) => {
  const [colorlink, setColorLink] = useState({});

 const colorInvisible = (e)=>{
     let colorChange = { };
     setColorLink(colorChange);
 }

  const colorVisible = (e) => {
      console.log('here')
      let value = parseInt(e.target.id);
let colorChange = {id: value, active:true};
    setColorLink(colorChange);
  };
  
  return (
    <Wrapper>
      <Container>
        <ContentHead>
          Click or hover on the logo to reveal the color
        </ContentHead>
        <ContentWrapper>
          {Identity.map((data, index) => {
            return (
              <ContentDetailWrapper
                id={index}
                onClick={colorVisible}
                onMouseOver={colorVisible}
                onMouseLeave={colorInvisible}
              >
                <Content>
                  {colorlink.id === index && colorlink.active ? (
                    <LazyLoadImage
                      placeholderSrc={placeholder}
                      className="image"
                      role="button"
                      src={data.colorlink}
                    />
                  ) : (
                    <LazyLoadImage
                      effect="blur"
                      placeholderSrc={placeholder}
                      onMouseOver={colorVisible}
                      onMouseLeave={colorInvisible}
                      onClick={colorVisible}
                      className="image"
                      role="button"
                      src={data.link}
                    />
                  )}
                </Content>
                <ContentTextWrap>
                  <ContentText>{data.CompanyName}</ContentText>
                  <ContentSubText>Branding - Logo</ContentSubText>
                </ContentTextWrap>
              </ContentDetailWrapper>
            );
          })}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default VisualIdentitySection;
