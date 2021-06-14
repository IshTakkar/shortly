import styled from 'styled-components/macro';

import bgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg';

export const Container = styled.div`
    margin: 0 auto;
    position: relative;
    width: 85%;
    /* background: yellow; */
    display: flex;
    justify-content: flex-start;
`;

export const Wrapper = styled.form`
    width: 85%;
    display: flex;
    margin-top: -50px;
    padding: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #3b3054;
    background-image: url(${bgShortenDesktop});
    background-size: 100%;
    background-position: 0;
`;


export const SearchBar = styled.input`
    width: 80%;
    border-radius: 10px;
    border: none;
    padding: 15px;
`;

export const SearchError = styled.span`
    color: red;
`