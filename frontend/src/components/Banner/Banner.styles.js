import styled from 'styled-components';
import { devices } from '../../styles/Breakpoints.styles';


export const BannerLayout = styled.div`
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr;
  height: max-content;
  gap: 0;
  & div:nth-child(odd){
      display: none;
    }   
  & div:nth-child(2){
      grid-area: mainBanner;
      & div{
      display: block;
        height: 100%;
      }
    } 
  
  @media ${devices.device_md} {
    height: max-content;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
    'mainBanner .' 
    'mainBanner .';
    gap: 10px; 
    & div:nth-child(odd){
      & div:nth-child(2){
          display: none;
        }
      display: flex;
    }
    & div:nth-child(2){
      & div{
        height: 100%;
      }
    } 
  }
  @media ${devices.device_lg} {
    grid-template-columns: 1fr 2fr 1fr;
    gap: 0 10px;
    grid-template-areas: 
      '. mainBanner .'
      '. mainBanner .';
    & div:nth-child(odd){
      & div:nth-child(2){
       display: block;
      }
      display: flex;
    }
  }
`;

export const BannerContent = styled.div`
    flex-direction: column;
    gap: 0px;
    height: 100%;
    & div{
        width: 100%;
        height: 100%;
      & img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
  }

  @media ${devices.device_md} {
    & div{
      height: 100%;
    }
  }
  @media ${devices.device_lg} {
    gap: 10px;
      & div{
        height: 50%;
      }
`;
