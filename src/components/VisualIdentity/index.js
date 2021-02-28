import React, { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/placeholder.png";
import {
  Wrapper,
  Container,
  ContentWrapper,
  Content,
  ContentDetailWrapper,
  Image
} from "./style";
const VisualIdentitySection = ({ Identity }) => {
    const [items , setItems] = useState([])
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
              </ContentDetailWrapper>
            );
          })}
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default VisualIdentitySection;
