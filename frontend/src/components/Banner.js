import React from 'react';
import bannerImages from '../data/bannerImages';
import { BannerContent, BannerLayout } from '../styles/Banner.styles';
import { Wrapper } from '../styles/Shared.styles';

const Banner = () => {
    return (
        <Wrapper>
            <BannerLayout>
                <BannerContent>
                    <img src={bannerImages.bannerLeft} alt="" />
                    <img src={bannerImages.bannerLeft} alt="" />
                </BannerContent>
                <BannerContent>
                    <img src={bannerImages.bannerMiddle} alt="" />
                    
                </BannerContent>
                <BannerContent>
                    <img src={bannerImages.bannerRight} alt="" />
                    <img src={bannerImages.bannerRight} alt="" />
                </BannerContent>
            </BannerLayout>
        </Wrapper>
    )
};

export default Banner;