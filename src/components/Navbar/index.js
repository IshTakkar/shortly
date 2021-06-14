import React from 'react';

import { Container, Header, LinksContainer, NavLogo, NavLink, ButtonContainer } from './NavbarElements';
import Logo from '../../assets/images/logo.svg';
import { Button } from '../Button';

const Navbar = () => {
    return (
        <>
            <Container>
                <Header>
                    <LinksContainer>
                        <NavLogo src={Logo} />
                        <NavLink>Features</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>Resources</NavLink>
                    </LinksContainer>
                    <ButtonContainer>
                        <NavLink>Login</NavLink>
                        <Button>Sign Up</Button>
                    </ButtonContainer>
                </Header>
            </Container>
        </>
    );
};

export default Navbar;