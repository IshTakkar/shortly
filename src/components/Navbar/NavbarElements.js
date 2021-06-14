import styled from 'styled-components/macro';

export const Container = styled.div`
    margin: 30px 64px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavLogo = styled.img``;

export const NavLink = styled.a`
    cursor: pointer;
    font-size: 14px;
    margin-left: 15px;
    color: #bfbfbf;
    font-weight: bold;


    &:hover {
        color: #35323e;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
`;
