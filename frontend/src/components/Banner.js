import React from 'react';
import bannerImages from '../data/bannerImages';
import { BannerContainer, MiddleContainer, SideContainer } from '../styles/Banner.styles';

const Banner = () => {
    return (
        <>
            <BannerContainer>
                <SideContainer>
                    <img src={bannerImages.bannerLeft} alt="" />
                    <img src={bannerImages.bannerLeft} alt="" />
                </SideContainer>
                <MiddleContainer>
                    <img src={bannerImages.bannerMiddle} alt="" />
                    
                </MiddleContainer>
                <SideContainer>
                    <img src={bannerImages.bannerRight} alt="" />
                    <img src={bannerImages.bannerRight} alt="" />
                </SideContainer>
            </BannerContainer>
        </>
    )
};

export default Banner;