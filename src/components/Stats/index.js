import React from 'react';

import icon1 from "../../assets/images/icon-brand-recognition.svg";
import icon2 from "../../assets/images/icon-detailed-records.svg";
import icon3 from "../../assets/images/icon-fully-customizable.svg";
import { Container, Wrapper, TextWrapper, Heading, Subtitle, CardWrapper } from './StatsElements';
import Card from '../Card';

const Stats = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <TextWrapper>
                        <Heading>Advanced Statistics</Heading>
                        <Subtitle>Track how your links are performing across the web with our advanced statistics dashboard.</Subtitle>
                    </TextWrapper>
                    <CardWrapper>
                        <Card
                            // cardTop="2.5em"
                            heading="Brand Recognition"
                            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                            icon={icon1}
                        />
                        <Card
                            // marginTop="6em"
                            // cardTop="10em"
                            heading="Detailed Records"
                            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                            icon={icon2}
                        />
                        <Card
                            // marginTop="8em"
                            // cardTop="7.5em"
                            heading="Fully Customizable"
                            text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                            icon={icon3}
                        />
                    </CardWrapper>
                </Wrapper>
            </Container>
        </>
    );
};

export default Stats;