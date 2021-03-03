import { Link } from "react-router-dom";
import styled from "styled-components";
export const DownWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 1365px) {
    width: 750px;
    margin: auto;
    margin-bottom: 50px;
  }
`;

export const TitleWrapper = styled.div`
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin-bottom: 55px;
`;

export const ServiceDetailWrap = styled.div`
@media (min-width:768px)and (max-width: 1365px){
display:grid;
grid-template-columns: 1fr 1fr 1fr  ;



}

`;
export const ServiceDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 1365px) {
    :last-child:nth-child(3n - 2) {
      grid-column: span 3;
    }
  }
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
  font-weight: 600;
  
`;

export const DetailButton = styled(Link)`
  text-decoration: none;
  color: #3a7a44;
  font-weight:bold;
  display: flex;
  align-items:center;
  justify-content:space-between;
`;
export const BtnText = styled.p`
margin-right: 4px;
`;

