import styled from "styled-components";

export const Wrapper = styled.section``;

export const Container = styled.div``;

export const TabsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

export const TabsContent = styled.div`
  width: 128px;
  height: 30px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border-bottom: ${({ active }) =>
    active ? "2px solid green" : "2px solid white"};
  font-weight: 500;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  &:hover {
  }
`;

export const ClientContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

  display: ${({ activeState }) => (activeState ? "block" : "none")};
  @media all and (max-width: 280px) {
    margin-top: 40px;
  }
`;

export const ClientContent = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  .image {
    width: 340px;
    height: 272px;
    @media all and (max-width: 280px) {
      width: 240px;
      height: 172px;
    }
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
