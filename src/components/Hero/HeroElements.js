import styled from 'styled-components/macro';

export const Container = styled.div`
    background: #fff;
    margin: 48px;
`;

export const Wrapper = styled.div`
    z-index: 1;
    height: 400px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;

export const Row = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
`;

export const Col1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Col2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const Heading = styled.h1`
    font-size: 3.75em;
    color: #232127;
    line-height: 1.2em;
`;

export const Subtitle = styled.p`
    font-size: 1.2em;
    color: #bfbfbf;
    line-height: 1.5em;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
`;