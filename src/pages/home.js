import React from 'react';
import styled from 'styled-components/macro';

import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const StyledHome = styled.div`
    margin: 0px;
    width: 100%;
`;

const Home = () => {
    return (
        <>
            <StyledHome>
                <Navbar />
                <Hero />
            </StyledHome>
        </>
    );
};

export default Home;