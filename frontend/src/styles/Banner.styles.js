import styled from 'styled-components';
import { devices } from './Breakpoints.styles';


export const BannerLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* width: 100vw; */
  gap: 10px;
  & div:nth-child(odd){
      display: none;
    }   
  & div:nth-child(2){
      grid-area: mainBanner;
    }   
  
  @media ${devices.device_md} {
    grid-template-columns: auto;
    grid-template-areas: 
    'mainBanner mainBanner .' 
    'mainBanner mainBanner .';
    & div:nth-child(odd){
      & img:nth-child(2){
        display: none;
      }
      display: block;
    }
  }
  @media ${devices.device_lg} {
    grid-template-columns: auto;
    grid-template-areas: 
      '. mainBanner .'
      '. mainBanner .';
    & div:nth-child(odd){
      & img:nth-child(2){
        display: block;
      }
      display: block;
    }
  }

`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img{
        width: 100%;
        border-radius: 8px;
    }

  @media ${devices.xs} {
    
  }
`;

/* export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img{
        width: 100%;
        border-radius: 8px;
    }
`;
 */