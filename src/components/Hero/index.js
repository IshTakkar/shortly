import React from 'react';

import { Container, Wrapper, Row, Heading, Subtitle, Col1, Col2, Image } from './HeroElements';
import { Button } from '../Button';
import image from '../../assets/images/illustration-working.svg';

const Hero = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Row>
                        <Col1>
                            <Heading>More than just shorter links</Heading>
                            <Subtitle>Build your brand's recognition and get detailed insights on how your links are performing</Subtitle>
                            <Button style={{ width: '150px', marginTop: '30px'}}>Get Started</Button>
                        </Col1>
                        <Col2>
                            <Image src={image} />
                        </Col2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    );
};

export default Hero;