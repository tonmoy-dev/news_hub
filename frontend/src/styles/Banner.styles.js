import styled from 'styled-components';


export const BannerContainer = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  /* background: papayawhip; */
  gap: 10px;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img{
        width: 100%;
        border-radius: 8px;
    }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img{
        width: 100%;
        border-radius: 8px;
    }
`;
