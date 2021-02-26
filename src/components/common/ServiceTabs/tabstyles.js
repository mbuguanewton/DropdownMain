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
`;
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
`;

export const TabsContent = styled(ScrollLink)`
  display: flex;
  justify-content: center;
  font-weight: normal;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
  &:active {
    font-weight: 700;
    color: #3a7a44;
  }
  &:hover {
    font-weight: 700;
    color: #3a7a44;
  }
`;
