import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
`;

export const SideBanner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    
    & div{
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        
    }
`;

/* export const BannerContent = styled.div`
    
`; */

export const BannerTitle = styled.h2`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
`;

export const BannerBody = styled.p`

`;

export const BannerButton = styled.button`
    color: #fff;
    background-color: #000;
    text-transform: uppercase;
    padding: 10px 16px;
    font-size: small;
`;

export const BannerImage = styled.div`
    max-width: 100%;

    & img{
        width: 100%;
        height: 100%;
    }
    
`;

export const ExploreContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const CardWrapper = styled.div`
    display: flex;
    gap: 20px;
    text-align: left;
    /* max-width: 100%; */
    & img{
        width: 150px;
        height: 150px;
        border-radius: 6px;
    }
    & div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    & h5{
        font-weight: bold;
        text-transform: uppercase;
    }
    & h4{
        text-transform: uppercase;
    }
    & a{
        font-weight: normal;
        font-size: small;
        text-decoration: none;
        text-transform: uppercase;
    }
`;