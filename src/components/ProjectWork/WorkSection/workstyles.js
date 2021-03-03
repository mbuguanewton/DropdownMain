import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div``;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  
  @media all and (min-width: 360px) {
    width: 293.6px;
    margin: auto;
  }
`;

export const TabsContent = styled.div`
  width: 128px;
  height: 30px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border-bottom: ${({ active }) =>
    active ? "2px solid green" : "2px solid white"};
  font-weight: ${({ active }) => (active ? "700" : "500")};
  font-size: 17px;

  color: ${({ active }) => (active ? "black" : "#ABABAB")};
  line-height: 30px;
  text-align: center;
  @media all and (max-width: 351px) {
    font-size: 13px;
  }
  @media all and (max-width: 302px) {
    font-size: 11px !important;
  }
  &:hover {
  }
`;

export const ClientContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  display: ${({ activeState }) => (activeState ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 280px) {
    margin-top: 40px;
  }

  @media all and (max-width: 328px) {
    width: 328px;
    margin: auto;
    margin-top: 30px;
  }
  @media all and (min-width: 360px) {
    width: 360px;
    margin: auto;
    margin-top: 30px;
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    width: 668px;
    display: ${({ activeState }) => (activeState ? "grid" : "none")};
    grid-template-columns: 1fr 1fr;
    margin-bottom: 60px;
  }
`;

export const ClientContent = styled.div`
  width: 90%;

  height: 100%;
  margin: auto;
  .image {
    width: 340px;
    height: 272px;
    filter: drop-shadow(16.694px 16.694px 43.7224px rgba(0, 0, 0, 0.149));
    @media all and (max-width: 280px) {
      width: 240px;
      height: 172px;
    }
    @media all and (max-width: 328px) {
      width: 250px;
      height: 182px;
      margin:auto;
    }
    @media (min-width: 768px) and (max-width: 1365px) {
      object-fit: cover;
    }
  }
  @media (min-width: 768px) and (max-width: 1365px) {
    margin: auto;
    height: 240px;
  }
`;

export const Image = styled.img`
  width: 340px;
  height: 272px;
  @media all and (max-width: 280px) {
    width: 240px;
    height: 172px;
  }
`;
