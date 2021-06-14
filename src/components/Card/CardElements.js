import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 33%;
    position: relative;
    z-index: 500;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    background: white;
    border-radius: 10px;
    margin: 5em 0em;
    padding: 10px;
    /* margin-top: ${ props => props.marginTop }; */
`;

export const Image = styled.img`
    padding: 0.7em;
    border-radius: 50%;
    background: #3b3054;
    position: absolute;
    /* top: ${ props => props.cardTop }; */
    top: 2.5em;
    left: 1em;
    margin: auto;
    z-index: 20;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 0;
    width: 100%;
`;

export const Heading = styled.h1`
    font-size: 1.2em;
    text-align: left;
    margin-bottom: 5px;
`;

export const Subtitle = styled.p`
    font-size: 0.8em;
    text-align: left;
    color: #9e9aa7;
`;