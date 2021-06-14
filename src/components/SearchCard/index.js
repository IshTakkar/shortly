import React from 'react';

import { Container, Wrapper, Link, CopyContainer, CopyText } from './SearchCardElements';
import { Button } from '../Button';

const SearchCard = (props) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Link>{props.link}</Link>
                    <CopyContainer>
                        <CopyText>{props.shortened}</CopyText>
                        <Button style={{ width: '110px', borderRadius: '10px' }}>Copy</Button>
                    </CopyContainer>
                </Wrapper>
            </Container>
        </>
    );
};

export default SearchCard;