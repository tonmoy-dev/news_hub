import React from 'react';
import exploreImages from '../../data/exploreImages';
import { Wrapper } from '../../styles/Shared.styles';
import { BannerBody, BannerButton, BannerImage, BannerTitle, Container, ExploreContents, SideBanner } from './Explore.styles';
import ExploreCard from './ExploreCard';

const Explore = () => {
    return (
        <Wrapper>
            <Container>
                <SideBanner>
                    <div>
                        <BannerTitle>
                            TOUR THE GEMS OF EUROPE
                        </BannerTitle>
                        <BannerBody>
                            Aenean eget venenatis dolor, placerat cursus est. Donec sodales lobortis ultricies. In hac habitasse platea dictumst.
                        </BannerBody>
                        <BannerButton>
                            Lets Explore
                        </BannerButton>
                    </div>
                    <BannerImage>
                        <img src={exploreImages.banner} alt="" />
                    </BannerImage>
                </SideBanner>
                <ExploreContents>
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </ExploreContents>
                <ExploreContents>
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </ExploreContents>
            </Container>
        </Wrapper>
    );
};

export default Explore;