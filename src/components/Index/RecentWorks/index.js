import React from "react";
import ArrowTo from "../../../assets/Icons/ArrowTo.svg";
import {
  WorkContainer,
  WorkWrapper,
  ContentContainer,
  ContentWrapper,
  ImageWrapper,
  Image,
  LinkWrapper,
  LinkTo,
  Arrow,
  WorkTitle,
  Wrapper
} from "./workStyles";
const RecentWork = ({recentData}) => {
  return (
    <WorkContainer>
    <Wrapper>
    <WorkTitle>Recent works</WorkTitle>
      <WorkWrapper>
    {recentData.map((data, index)=>{
        return(
            <ContentContainer colorSet={data.color} area={data.area} key={data.id}>
            <ContentWrapper area={data.area}>
            <ImageWrapper>
            <Image area={data.area} src={data.Image}/>
          </ImageWrapper>
          <LinkWrapper area={data.area}>
            <LinkTo to={data.buttonLink}>
              {data.name} <Arrow src={ArrowTo}/>
            </LinkTo>
          </LinkWrapper>
            </ContentWrapper>
          
        </ContentContainer>
        )
    })}
        
      </WorkWrapper>
    </Wrapper>
    
    </WorkContainer>
  );
};

export {RecentWork};
