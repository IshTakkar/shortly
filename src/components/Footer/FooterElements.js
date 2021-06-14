import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    margin: 0;
    background: #232127;
    padding: 40px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    align-self: flex-start;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(295deg) brightness(102%) contrast(102%);
    width: 90px;
`;

export const LinksContainer = styled.div`
    display: flex;
`;

export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Heading = styled.p`
    color: #fff;
    margin-bottom: 15px;
    font-size: 14px;
`;

export const Link = styled.a`
    color: #bfbfbf;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #2acfcf;
    }
`;

export const SocialMediaContainer = styled.div`
    color: white;
    align-self: flex-start;

    i {
        cursor: pointer;

        &:hover {
            color: #2acfcf;
        }
    }
`;
