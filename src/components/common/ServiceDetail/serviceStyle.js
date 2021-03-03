import styled from 'styled-components';

export const TopWrapper = styled.div`
  margin-bottom: 54px;
  
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: ${({ picFalse }) => (picFalse ? "none" : "block")};
  }
  .office {
    height: 200px;
    width: 100%;
    
    object-fit: center;

    @media (min-width: 768px) and (max-width: 1365px) {
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }
  #img1 {
    width: 320px;
    height: 400px;
    object-fit: cover;
  }
  #img0 {
    width: 500px;
    height: 350px;
    object-fit: cover;

    @media all and (max-width: 472px) {
      object-fit: contain;
    }
    @media all and (max-width: 436px) {
      object-fit: contain;
      width: 350px;
    }
  }

  @media (min-width: 768px) and (max-width: 1365px) {
    width: 750px;
    margin: auto;
  }
`;

export const Image = styled.div`
  background: url(${({ sbg }) => sbg}) no-repeat;
  background-size: cover;
  
  width: 400px;
  height:200px;
`;

export const ContentDetailWrapper = styled.div`
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({bgColor})=>(bgColor)};
 box-shadow: ${({boxShadow})=>(boxShadow ? (' 7.89586px 7.89586px 20.6507px rgba(0, 0, 0, 0.129)'): ('none'))};
  border-radius: 2.71825px;
  margin-bottom: 56px;
`;
export const ContentWrapper = styled.div`
  font-weight: 300;
  font-size: 35px;
  line-height: 49px;
  width: 88%;
  margin-bottom: 23px;
`;

export const ContentText = styled.p``;

export const ContentMainTextWrapper = styled.div`
  width: 88%;
  font-size: 14px;
  line-height: 18px;
  color: #000000;


`;

export const ContentMainText = styled.p`
  font-weight: 400;
  text-align: left;
  font-family: Noto Sans;
  margin-bottom:20px;
`;

export const ContentSubDetailWrapper = styled.div`
display:flex;
justify-content:center;
`;

export const ContentSubText = styled.p`
text-align:center;
width: 80%;
font-weight: 400px;
line-height:24px;
font-size:20px;
`;

