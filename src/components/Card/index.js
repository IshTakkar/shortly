import React from 'react';

import { Container, Wrapper, TextWrapper, Heading, Subtitle, Image } from './CardElements';

const Card = (props) => {
    return (
        <>
            <Container>
                <Image src={props.icon} />
                <Wrapper marginTop={props.marginTop} cardTop={props.cardTop}>
                    <TextWrapper>
                        <Heading>{props.heading}</Heading>
                        <Subtitle>{props.text}</Subtitle>
                    </TextWrapper>
                </Wrapper>
            </Container>
        </>
    );
};

export default Card;