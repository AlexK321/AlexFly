import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.font};
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  padding: 10px 0;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  min-height: calc(100% - 20px);
  margin: 0px auto;
  border: 2px solid #c99fb4;
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 100%;
    border: 0px solid #c99fb4;
  }
`;
