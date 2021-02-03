import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WorkContainer= styled.section`
height:100%;
width:100%;
`;

export const WorkTitle = styled.div`
  margin-bottom: 23px;
  text-align: center;
  color: #264d2d;
  font-weight:bold;
  font-size:21px;
  line-height: 29px;
`;
export const WorkWrapper= styled.div`
display:grid;
grid-template-rows: 1fr 1fr 1fr;
grid-gap: 2rem;

@media all and (min-width: 1000px){
  width: 80%;
  margin:auto;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1.3fr 2fr;
  grid-template-areas: "erp loci"
                        "insp loci";
}
grid-column-gap: 30px;
`;

export const ContentContainer = styled.div`
  background: ${({ colorSet }) => colorSet};
  width: 90%;

  margin: auto;
  position: relative;
  text-align: center;
  border-radius: 2px;
  @media all and (min-width: 1000px) {
    width: 100%;
    grid-area: ${({ area }) => {
      if (area === "loci") {
        return "loci";
      } else if (area === "erp") {
        return "erp";
      } else {
        return "insp";
      }
    }};

    height: 100%;
    
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 19px;
  @media all and (min-width: 1000px) {
    padding-top: ${({ area }) => (
area === "loci" ? '200px' : '60px'
    )};
  }
`;
export const ImageWrapper = styled.div`

`;

export const Image = styled.img`
  width: 250px;
  height: 150px;
  object-fit: contain;

  @media all and (min-width: 600px) {
    height: 320px;
    width: 500px;
    object-fit: cover;
  }

  @media all and (min-width: 1000px){
    height: ${({area})=>(area === 'loci' ? '481px' : '250px')};
    width:${({area})=>(area==='loci'? '755px': '390px')};
  }
`;

export const LinkWrapper = styled.div`
text-align:left;
position: relative;
width: 225px;
margin:auto;

@media all and (min-width:600px){
  width:460px;
}

@media all and (min-width: 1000px){
  width: ${({area})=>(area === 'loci' ? '700px': '370px')}
}
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  position: relative;
  align-items: center;
  font-size: 15px;
  @media all and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const Arrow = styled.img`
  height: 13px;
  width: 30px;
  object-fit: contain;
  position: relative;
  top: 2px;
  @media all and (min-width: 600px) {
    height: 20px;
  }
`;
