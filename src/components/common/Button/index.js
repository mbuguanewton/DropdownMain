import React from 'react'
import { ContentButtonWrap, ButtonText } from "./ButtonStyle";

const Button = ({Btext}) => {
    return (
      <ContentButtonWrap>
        <ButtonText>{Btext}</ButtonText>
      </ContentButtonWrap>
    );
}

export {Button}
