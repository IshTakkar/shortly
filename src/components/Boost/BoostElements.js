import styled from 'styled-components/macro';

import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';

export const Container = styled.div`
    width: 100%;
    margin: 0;
    background-color: #3b3054;
    background-image: url(${bgBoostDesktop});
    background-size: 100%;
    background-position: 0;
    padding: 30px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 150px;
`;

export const Heading = styled.h1`
    color: white;
    margin-bottom: 10px;
    font-size: 28px;
`;
