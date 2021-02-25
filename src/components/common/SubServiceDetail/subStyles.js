import styled from "styled-components";
export const DownWrapper = styled.div``;

export const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-bottom: 55px;
`;
export const ServiceDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const DetailImageWrap = styled.div`
  width: 162px;
  height: 162px;
  background: ${({type})=>(type==='fill'?'rgba(165, 199, 125, 0.3)' : 'white')};
  border-radius: 50%;
  margin-bottom: 26px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailImage = styled.img`

`;

export const DetailTitle = styled.p`
  width: 178px;
  text-align: center;
  font-size: 19px;
  line-height: 24px;
  font-weight: 500;
  
`;

