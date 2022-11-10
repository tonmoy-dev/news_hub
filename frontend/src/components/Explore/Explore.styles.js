import styled from "styled-components";
import { devices } from '../../styles/Breakpoints.styles';

export const Container = styled.div`
    display: grid;
    gap: 30px;
    grid-template-areas: 
    'main' 
    '.'
    '.';
    
    @media ${devices.device_md} {
    grid-template-areas: 
    'main main' 
    '. .';
      }
      
    @media ${devices.device_lg} {
    grid-template-areas: 
    'main . .';
`;

export const SideBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-area: main;
    & div{
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }    
`;

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