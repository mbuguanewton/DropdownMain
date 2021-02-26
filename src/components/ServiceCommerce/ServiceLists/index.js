import React from 'react'
import { Wrapper, Container } from "./styles";
import {ServiceTab} from '../../common'
const Lists = ({TabsData}) => {
    return (
        <Wrapper>
            <Container>
            <ServiceTab TabData={TabsData}/>
            </Container>
        </Wrapper>
    )
}

export {Lists}
