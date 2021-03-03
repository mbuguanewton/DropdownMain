import styled from 'styled-components';
import { Link as ScrollLink } from "react-scroll";
export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 113px;
`;

export const ServiceTitle = styled.h5`
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  display: flex;
  justify-content: center;
  color: #264d2d;
  @media (min-width: 768px) and (max-width: 1356px) {
   justify-content:left;
    text-align: left;
    width: 750px;
    margin:auto;
  }
`;
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 1356px) {
    display: grid;
    grid-template-columns: ${({ listStyle }) =>
      listStyle === "2" ? "0.6fr 1fr" : "1fr 1fr 1fr"};
      grid-gap: 0;
    text-align: left;
    width: 750px;
    margin: auto;
  }
`;

export const TabsContent = styled(ScrollLink)`
  display: flex;
  justify-content: center;
  font-weight: normal;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
  width: 80%;
  text-align: center;
  margin: auto;
  margin-bottom: 12px;
  &:active {
    font-weight: 700;
    color: #3a7a44;
  }
  &:hover {
    font-weight: 700;
    color: #3a7a44;
  }

  @media (min-width: 768px) and (max-width: 1356px) {
    text-align: left;
    width: 350px;
    display: block;
    margin: 0;
    font-size: 25px;
  }
`;
