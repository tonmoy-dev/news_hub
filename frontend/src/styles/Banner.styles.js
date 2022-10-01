import styled from 'styled-components';


export const BannerLayout = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  gap: 10px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & img{
        width: 100%;
        border-radius: 8px;
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