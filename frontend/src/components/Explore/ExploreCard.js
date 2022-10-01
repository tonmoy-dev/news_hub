import React from 'react';
import exploreImages from '../../data/exploreImages';
import { CardWrapper } from '../../styles/Explore.styles';

const ExploreCard = () => {
    return (
        <CardWrapper>
            <img src={exploreImages.content} alt="" />
            <div>
                <h5>Fashion</h5>
                <h4>FIVE REASONS WHY PEOPLE LOVE FASHION</h4>
                <a href="#">Read More</a>
            </div>
        </CardWrapper>
    )
};

export default ExploreCard;