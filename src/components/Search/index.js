import React from 'react';

import { Container, Wrapper, SearchBar, SearchError } from './SearchElements';
import { Button } from '../Button';

const Search = ({ text, setText, click, errorMessage }) => {

    return (
        <>
            <Container>
                <Wrapper onSubmit={click}>
                    <SearchBar id="text" autoComplete="off" onChange={(e) => setText(e.target.value)} value={text} placeholder="Shorten a link here..." />
                    <SearchError id="error" />
                    <Button style={{ width: '150px', borderRadius: '10px'}} type="submit">Shorten It!</Button>
                </Wrapper>
            </Container>
        </>
    );
};

export default Search;