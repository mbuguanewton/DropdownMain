import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;

export const ServiceTitle = styled.div`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight: bold;
  font-size: 21px;
  line-height: 29px;
  margin-top: 20px;

  @media all and (min-width: 1300px) {
    width: 90%;
    text-align: left;
    margin: auto;
    margin-bottom: 23px;
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
  @media all and (min-width: 1000px) {
    position: relative;
    margin-bottom: 300px;
  }
`;

export const ContentTitle = styled.p`
  color: #f29a2e;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 30px;

  @media all and (min-width: 1300px) {
    text-align: left;
    font-size: 33px;
    line-height: 26px;
    color: #151515;
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
  @media all and (min-width: 372px) {
    overflow: hidden;
  }
  @media all and (min-width: 392px) {
    overflow: hidden;
    background-size: cover;
    background-position: center;
  }
  @media all and (min-width: 613px) {
    height: 435px;
    background-size: cover;
    background-position: center;
  }
 
  @media all and (min-width: 1300px) {
    width: 90%;
    height: 556px;
  }
  @media all and (min-width: 1400px) {
    margin-left: ${({ type }) => (type === "mobile" ? "90px" : "0")};
  }
`;

export const Image = styled.img`
  width: ${({ type }) => (type === "screen" ? "181px" : "120px")};
  height: ${({ type }) => (type === "screen" ? "100.68px" : "147px")};
  position: relative;
  float: ${({ type }) => (type === "screen" ? "left" : "right")};
  top: ${({ type }) => (type === "screen" ? "60px;" : "33px")};
  margin-left: ${({ type }) => (type === "screen" ? "30px" : "0px")};
  margin-right: ${({ type }) => (type === "screen" ? "0px" : "40px")};

  @media all and (max-width: 349px) {
    top: ${({ type }) => (type === "screen" ? "80px" : "53px")};
  }
  @media all and (min-width: 366px) {
    top: ${({ type }) => (type === "screen" ? "70px" : "36px")};
  }
  @media all and (min-width: 372px) {
    top: ${({ type }) => (type === "screen" ? "70px" : "58px")};
  }
  @media all and (min-width: 443px) {
    margin-left: ${({ type }) => (type === "screen" ? "20%" : "0px")};
  }
  @media all and (min-width: 505px) {
    margin-left: ${({ type }) => (type === "screen" ? "20%" : "0px")};
  }

  @media all and (min-width: 613px) {
    width: ${({ type }) => (type === "screen" ? "391px" : "320px")};
    height: ${({ type }) => (type === "screen" ? "250.68px" : "357px")};
    margin-left: ${({ type }) => (type === "screen" ? "10%" : "0px")};
    top: ${({ type }) => (type === "screen" ? "150px;" : "84px")};
  }
  @media all and (min-width: 1000px) {
    width: ${({ type }) => (type === "screen" ? "426px" : "320px")};
    height: ${({ type }) => (type === "screen" ? "276.68px" : "357px")};
    margin-left: ${({ type }) => (type === "screen" ? "5%" : "0px")};

    top: ${({ type }) => (type === "screen" ? "150px;" : "84px")};
  }
  @media all and (min-width: 1300px) {
    width: ${({ type }) => (type === "screen" ? "586px" : "420px")};
    height: ${({ type }) => (type === "screen" ? "376.68px" : "477px")};
    margin-left: ${({ type }) => (type === "screen" ? "5%" : "0px")};

    top: ${({ type }) => (type === "screen" ? "150px;" : "84px")};
  }
`;

export const ContentDetails = styled.div`
  @media all and (min-width: 613px) {
    padding-top: 46px;
  }
  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 46px;
    padding-bottom: 66px;
    box-shadow: 19.6965px 19.6965px 51.5861px rgba(0, 0, 0, 0.129);
    grid-gap: 2rem;
  }

  @media all and (min-width: 1000px) {
    
  }
  @media all and (min-width: 1300px) {
    display: block;
    width: 526px;
    height: 485px;
    position: absolute;
    top: 178px;
    background: #ffffff;
    box-shadow: 35.2601px 35.2601px 76.1574px rgba(0, 0, 0, 0.3);
    margin-left: ${({ type }) => (type === "screen" ? "55vw" : "-30px")};
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
  width: 90%;
  margin: auto;
  font-size: 16px;
  line-height: 18.24px;
  margin-top: 46px;
  margin-bottom: ${({ type }) => (type === "screen" ? "20px" : "40px")};
  color: #17311b;

  @media all and (min-width: 613px) {
    font-size: 22px;
    line-height: 23px;
    margin-top: 0px;
    text-align: justify;
  }
  @media all and (min-width: 768px) {
    width: 381px;
    line-height: 23px;
  }
  @media all and (min-width: 1000px) {
    width: 90%;
    margin-bottom: 60px;
    line-height: 25px;
  }
  @media all and (min-width: 1300px) {
    width: 486px;
    margin-left: 22px;
  }
`;

export const ServicesContentWrapper = styled.div`
  @media all and (min-width: 613px) {
  }
  @media all and (min-width: 1000px) {
    margin-bottom: 40px;
  }
`;
export const ContentDetailServices = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  width: 90%;
  margin: auto;

  @media all and (min-width: 613px) {
    margin-bottom: 10px;
    font-size: 18px;
  }
  @media all and (min-width: 768px) {
    width: 260px;
  }
  @media all and (min-width: 1000px) {
    width: 90%;
  }
`;

export const ContentDetailButton = styled.div`
  display: none;

  @media all and (min-width: 768px) {
    background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);

    border: 2px solid
      radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
    width: 194px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15.595px;
    margin-left: 20px;
    margin-top: 20px;
  }
  @media all and (min-width: 871px) {
    margin-left: 15%;
  }
  @media all and (min-width: 1000px) {
    margin-left: 5%;
  }
`;

export const DetailButton = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 17.0662px;
  line-height: 23px;
`;

export const ContentDetailOButton = styled.div`
  display: none;
  @media all and (min-width: 768px) {
    display: none !important;
  }
  @media all and (min-width: 613px) {
    background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);

    border: 2px solid
      radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
    width: 194px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15.595px;
   margin:auto;
  }
`;

export const DetailOButton = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 17.0662px;
  line-height: 23px;
  width: 100%;
  text-align:center;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:center;
`;
