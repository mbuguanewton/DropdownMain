import React, { useState } from "react";

import {
  Wrapper,
  Container,
  HeadWrap,
  HeadingText,
  HeadingSubText,
  ServiceWrapper,
  Content,
  EmptySelection,
  FullSelection,
  ContentText,
  SelectionCheck,
  Image,
  FormWrapper,
  Form,
  FormP,
  FormLabel,
  FormInput,
  FormButton,
  FormTextArea,
  FormError,
  FormContent,
  ContactDetails,
  CallDetails,
  EmailDetails,
} from "./style";

import FormDetails from "../Form/form";
import validateInfo from "../Form/validation";
const ContactSection = ({ ContactData, submitForm }) => {
  const [activeStatus, setActiveStatus] = useState({ id: 0, active: true });
  
 const {
   handleChange,
   values,
   handleSubmit,
   errors,
   submitError,
   handleServiceSelection,
 } = FormDetails(submitForm, validateInfo);
 
  const changeActiveStatus = (e) => {
    let value = parseInt(e.target.id);
    let activeStatuses = { id: value, active: true };
    setActiveStatus(activeStatuses);
    //updating the service value
    if (activeStatus.id === value) {
      return;
    } else {
      // eslint-disable-next-line array-callback-return
      ContactData.map((data, index) => {
        if (index === value) {
         handleServiceSelection(data.TextIcon);
        }
      });
    }
  };

  

  
  return (
    <Wrapper>
      <Container>
        <HeadWrap>
          <HeadingText>I'm interested in...</HeadingText>
          <HeadingSubText>*select one or two</HeadingSubText>
        </HeadWrap>
        
        <ServiceWrapper>
          {ContactData.map((data, index) => {
            return (
              <Content
                id={index}
                onClick={changeActiveStatus}
                checkId={index}
                active={activeStatus}
              >
                {activeStatus.id === index && activeStatus.active ? (
                  <FullSelection>
                    <SelectionCheck />
                  </FullSelection>
                ) : (
                  <EmptySelection />
                )}

                <Image
                  src={data.Icon}
                  alt=""
                  id={index}
                  onClick={changeActiveStatus}
                />

                <ContentText id={index} onClick={changeActiveStatus}>
                  {data.TextIcon}
                </ContentText>
              </Content>
            );
          })}
        </ServiceWrapper>

        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            {submitError.submiterror && (
              <FormError>{submitError.submiterror}</FormError>
            )}
            <FormContent>
              <FormLabel htmlFor="unames">Name*</FormLabel>
              <FormInput
                id="unames"
                type="text"
                name="unames"
                placeholder="Fullname"
                value={values.unames}
                onChange={handleChange}
              />
            </FormContent>
            {errors.unames && <FormError>{errors.unames}</FormError>}

            <FormContent>
              <FormLabel htmlFor="email">E-mail*</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
              />
            </FormContent>
            {errors.email && <FormError>{errors.email}</FormError>}

            <FormContent>
              <FormLabel htmlFor="message">Project description*</FormLabel>
              <FormTextArea
                name="message"
                placeholder="Tell us more"
                value={values.message}
                onChange={handleChange}
              />
            </FormContent>
            {errors.message && <FormError>{errors.message}</FormError>}
            <FormP>
              Your data is safe with us. We take your privacy seriously and we
              will never share your data with anyone. Read on our
              <a href="#">Privacy Policy</a>
              to learn more.
            </FormP>
            <FormButton type="submit">LETS TALK</FormButton>
          </Form>
        </FormWrapper>

        <ContactDetails>
          <CallDetails>
            <h5>Call</h5>
            <p> +254 794 268882</p>
          </CallDetails>
          <EmailDetails>
            <h5>E-mail</h5>
            <p>marketing@alero.co.ke</p>
          </EmailDetails>
        </ContactDetails>
      </Container>
    </Wrapper>
  );
};

export { ContactSection };
