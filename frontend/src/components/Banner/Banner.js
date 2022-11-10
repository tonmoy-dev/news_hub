import React from 'react';
import bannerImages from '../../data/bannerImages';
import { Wrapper } from '../../styles/Shared.styles';
import { BannerContent, BannerLayout } from './Banner.styles';

const Banner = () => {
    return (
        <Wrapper>
            <BannerLayout>
                <BannerContent>
                    <div>
                        <img src={bannerImages.bannerLeft} alt="" />
                    </div>
                    <div>
                        <img src={bannerImages.bannerLeft} alt="" />
                    </div>
                </BannerContent>
                <BannerContent>
                    <div>
                        <img src={bannerImages.bannerMiddle} alt="" />
                    </div>
                </BannerContent>
                <BannerContent>
                    <div>
                        <img src={bannerImages.bannerRight} alt="" />
                    </div>
                    <div>
                        <img src={bannerImages.bannerRight} alt="" />
                    </div>
                </BannerContent>
            </BannerLayout>
        </Wrapper>
    );
};

export default Banner;