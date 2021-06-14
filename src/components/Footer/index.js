import React from 'react';

import { Container, Wrapper, Icon, LinksContainer, LinksWrapper, Heading, Link, SocialMediaContainer } from './FooterElements';
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Icon src={logo} alt="logo" />
                <LinksContainer>
                    <LinksWrapper>
                        <Heading>Features</Heading>
                        <Link href="#">Link Shortening</Link>
                        <Link href="#">Branded Links</Link>
                        <Link href="#">Analytics</Link>
                    </LinksWrapper>
                    <LinksWrapper>
                        <Heading>Resources</Heading>
                        <Link href="#">Blog</Link>
                        <Link href="#">Developers</Link>
                        <Link href="#">Support</Link>
                    </LinksWrapper>
                    <LinksWrapper>
                        <Heading>Company</Heading>
                        <Link href="#">About</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Contact</Link>
                    </LinksWrapper>
                </LinksContainer>
                <SocialMediaContainer>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest"></i>
                    <i class="fab fa-instagram"></i>
                </SocialMediaContainer>
            </Wrapper>
        </Container>
    );
};

export default Footer;