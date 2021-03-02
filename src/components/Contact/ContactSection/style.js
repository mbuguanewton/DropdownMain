import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  oveflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeadWrap = styled.div`
width:90%;
margin:auto;
margin-bottom: 20px;
`;

export const HeadingText = styled.h5`
  font-size: 21.7077px;
  line-height: 25px;
  letter-spacing: 0.01em;
`;

export const HeadingSubText = styled.p`
  font-size: 12.7713px;
  line-height: 15px;
`;

export const ServiceWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 0.5rem;
  width: 90%;
  margin: auto;
  justify-content: center;
  align-content: center;
  
`;

export const ContentDetailWrapper = styled.div`
  z-index: 40;
  background: red;
  width: 188px;
  height: 192px;
  margin: auto;
`;
export const Content = styled.div`
  border-radius: 13.1259px;
  z-index: 2;
  width: 168px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ checkId, active }) =>
    checkId === active.id && active.active
      ? "white"
      : "rgba(242, 141, 119, 0.3)"};
  box-shadow: ${({ checkId, active }) =>
    checkId === active.id && active.active
      ? "0px 0px 22.304px #e0ecd1"
      : "none"}; 
`;

export const EmptySelection = styled.div`
  position: absolute;
  width: 26.24px;
  height: 24.06px;
  background: #ffffff;
  left: 126.85px;
  top: 15.31px;
`;

export const FullSelection = styled.div`
  position: absolute;
  width: 26.24px;
  height: 24.06px;
  left: 126.37px;
  top: 15.09px;
  background: #e0ecd1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SelectionCheck = styled.div`
  width: 15.61px;
  height: 15.61px;
  left: 131.95px;
  top: 19.55px;

  background: #3a7a44;
  border-radius: 10.0368px;
`;
export const ContentText = styled.h5`
  font-size: 16.4027px;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: center;
  color: #151515;
`;

export const Image = styled.img`
  width: 73px;
  height: 50px;
  margin-bottom: 38px;
  z-index: -20;
`;

export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  @media all and (min-width: 1000px) {
    grid-area: col1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

export const FormP = styled.p`
  font-weight: normal;
  font-size: 14.6466px;
  line-height: 20px;
  text-align: justify;
  margin-bottom: 21px;
  margin-top: 20px;
  a {
    font-weight: bold;
    font-size: 14.6466px;
    line-height: 20px;
    text-align: justify;
    text-decoration-line: underline;
    margin-left: 10px;
    margin-right: 10px;
    color: #3a7a44;
  }

  @media all and (min-width: 1000px) {
    font-size: 16px;
  }
  @media all and (min-width: 768px) {
    text-align: left;
    font-size: 19px;
  }
`;
export const FormError = styled.p`
  color: red;
`;

export const FormContent = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;

  @media all and (min-width: 768px) {
    height: 70px;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 0.3fr 1fr;
    position: relative;
  }
`;
export const FormLabel = styled.label`
  font-family: Noto Sans;
  font-weight: 600;
  font-size: 17.0927px;
  line-height: 25px;
  letter-spacing: 0.01em;
  margin-bottom: 16px;
`;

export const FormInput = styled.input`
  margin-top: 11px;
  background: #fcfcfc;
  border-radius: 12.7713px;
  height: 51px;
  border: 2.17077px solid #a5c77d;
  outline: none;
  text-indent: 20px;
  width: 100%;
  ::placeholder {
    color: #3a7a44;
  }
`;

export const FormTextArea = styled.textarea`
  margin-top: 11px;
  height: 148px;
  border: 2.26667px solid #a5c77d;
  border-radius: 12.7713px;
  outline: none;
  width: 100%;
  text-align: justify;
  text-indent: 20px;
  padding-top: 1rem;

  ::placeholder {
    color: #3a7a44;
  }
`;
export const FormButton = styled.button`
  width: 256.65px;
  margin: auto;
  height: 57.38px;
  color: #ffffff;
  background: radial-gradient(135% 135% at 5.8% 0%, #a5c77d 0%, #3a7a44 100%);
  font-weight: 600;
  font-size: 18.7791px;
  line-height: 26px;
  margin-top: 10vw;
  outline: none;
  border: 0.05px solid transparent;
  border-radius: 3rem;
  box-shadow: 21.9089px 21.9089px 57.3805px rgba(0, 0, 0, 0.129);

  @media all and (min-width: 1000px) {
    margin-top: 140px !important;
    position: relative;
  }
  @media all and (min-width: 768px) {
    margin-top: 16vw;
  }
`;

export const ContactDetails = styled.div`
  width: 90%;
  margin: auto;
`;

export const CallDetails = styled.div`
  margin-bottom: 16px;
  h5 {
    font-weight: normal;
    font-size: 17.8283px;
    line-height: 21px;
    letter-spacing: -0.04em;

    color: #151515;
  }

  p {
    font-weight:bold;
    font-size: 25.6566px;
    line-height: 42px;
    color: #151515;
  }
`;

export const EmailDetails = styled.div`
  margin-bottom: 26px;
  h5 {
    font-weight: normal;
    font-size: 17.8283px;
    line-height: 21px;
    letter-spacing: -0.04em;

    color: #151515;
  }

  p {
    font-weight: bold;
    font-size: 25.6566px;
    line-height: 42px;
    color: #151515;
  }
`;
