import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;
export const Wrapper = styled.div`
width:100%;
height: 100%;

margin-bottom: 152px;
`
export const ServiceTitle = styled.div`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight: bold;
  font-size: 21px;
  line-height: 29px;
  margin-top: 20px;
  @media all and (min-width: 768px) {
    font-size: 43.47px;
    
    line-height: 69px;
  }

  @media all and (min-width: 1366px){
    text-align:left;
    width:1000px;
    margin:auto;
    font-size:20px;
  }

`;

export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 80px;
  @media all and (min-width: 505px) {
    width: 80%;
    margin: auto;
    margin-bottom: 50px;
  }
  @media all and (min-width: 613px) {
    width: 90%;
    margin: auto;
    margin-bottom: 80px;
  }
  @media all and (min-width: 768px){
    width: 791px;
  }
  @media all and (min-width: 1200px) {
    position: relative;
    width:1000px;
    
  }

  @media all and (min-width: 1366px){
    margin-bottom: 170px;
  }
`;

export const ContentTitle = styled.p`
  color: #f29a2e;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 30px;
  @media all and (min-width: 768px) {
    color:#151515;

    font-size: 28px;
    line-height: 20px;
  }
  @media all and (min-width: 1366px){
    text-align:left;
  }
 
`;

export const ContentImage = styled.div`
  width: 100%;
  height: 195.61px;
  position: relative;
  background: url(${({ background }) => background}) no-repeat;
  background-size: contain;
  @media all and (max-width: 349px) {
    height: 200px;
    background-size: cover;
  }

  @media all and (min-width: 392px) {
    height: 230px;
    background-size: cover;
    background-position: center;
  }
  @media all and (min-width: 613px) {
    height: 260px;
    background-size: cover;
    background-position: center;
  }
  @media all and (min-width: 768px) {
    height: 360px;
    background-size: cover;
  }
  @media all and (min-width: 1200px) {
    width: 100%;
    background-size: fit;
    background-position: bottom;
  }
  @media all and (min-width: 1366px){
    height: 500px;
  }
  @media all and (min-width: 1400px) {
    margin-left: ${({ type }) => (type === "mobile" ? "90px" : "0")};
  }
`;



export const ContentDetails = styled.div`
  @media all and (min-width: 613px) {
  }
  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.6fr 0.6fr;
    padding-top: 26px;
    padding-bottom: 66px;
    box-shadow: 19.6965px 19.6965px 51.5861px rgba(0, 0, 0, 0.129);
    grid-gap: 2rem;
    justify-content: center;
    width: 100%;
  }

  @media all and (min-width: 1366px) {
    display: block;
    width: 430px;
    position: absolute;
    top: ${({ toptype }) => (toptype === "screen" ? "160px" : "200px")};
    left: ${({ type }) => (type === "screen" ? "700px" : "-90px")};
    background: #ffffff;
  }

  @media all and (min-width: 1400px) {
    display: block;
    width: 556px;
    height: 485px;
    position: absolute;
    top: 178px;
    background: #ffffff;
    box-shadow: 35.2601px 35.2601px 76.1574px rgba(0, 0, 0, 0.3);
    margin-left: ${({ type }) => (type === "screen" ? "58vw" : "-30px")};
  }
`;

export const ContentDetailText = styled.p`
  height: 93px;
  width: 84%;
  margin: auto;
  font-size: 16px;
  line-height: 22px;
  margin-top: 20px;
  text-align: justify;
  margin-bottom: ${({ type }) => (type === "screen" ? "70px" : "30px")};
  color: #17311b;

  @media all and (min-width: 613px) {
    text-align: justify;
    font-size: 18px;
  }
  @media all and (min-width: 768px) {
    width: 331px;
   
    line-height: 23px;
   margin-bottom:0;
   margin-top:0;
  }
  
`;

export const ServicesContentWrapper = styled.div`
  @media all and (min-width: 613px) {
  }
  @media all and (min-width: 1000px) {
    margin-bottom: 40px;
  }
  @media all and (min-width: 1366px) {
    margin-top: ${({ type }) => (type === "screen" ? "58px" : "24px")};
    margin-bottom: 0;
  }
`;
export const ContentDetailServices = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  width: 84%;
  margin: auto;

  @media all and (min-width: 613px) {
    margin-bottom: 10px;
    font-size: 18px;
  }
  @media all and (min-width: 768px) {
    width: 260px;
  }
  @media all and (min-width: 1366px) {
    width: 331px;
  }
`;

export const ContentDetailButton = styled.div`
  width: 84%;
  margin: auto;
  margin-top: 30px;

  @media all and (min-width: 768px) {
    width: 260px;
  }
  @media all and (min-width: 1366px) {
    width: 331px;
  }
`;

export const DetailButton = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 17.0662px;
  line-height: 23px;
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  border-radius: 15.595px;
  border: 2px solid
    radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  width: 194px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;




