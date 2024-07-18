import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.font};
  width: 100%;
  height: 1px;
  min-height: 100%;
  max-width: 100vw;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 1px;
  min-height: 90%;
  margin: auto;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    border: 0px solid ${props => props.theme.colors.border};
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 10px;
  display: flex;
  width: calc(100% - 20px);
  flex-wrap: wrap;
`;

export const Block = styled.div<{ color: string }>`
  margin: 1vw;
  display: flex;
  width: 15vw;
  aspect-ratio: 1 / 1;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  background: ${props => props.color};
`;
