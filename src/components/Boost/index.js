import React from 'react';

import { Container, Wrapper, Heading } from './BoostElements';
import { Button } from '../Button';

const Boost = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Heading>Boost your links today</Heading>
                    <Button style={{ width: '150px' }}>Get Started</Button>
                </Wrapper>
            </Container>
        </>
    );
};

export default Boost;