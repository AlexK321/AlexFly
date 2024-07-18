import styled, { keyframes } from 'styled-components';

const ContainerAnimation = keyframes`
  from { transform: translateX(-21vw); }
  to { transform: translateX(0%); }
`;

const AddAnimation = keyframes`
  from { transform: translateX(-20vw); }
  to { transform: translateX(0); }
`;

const DeleteAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(600%); }
`;

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

export const Container = styled.div<{ isAnimationTrigger: boolean; animationDuration: number }>`
  position: relative;
  margin: 10px auto;
  display: flex;
  width: 100%;
  animation-duration: ${props => props.animationDuration / 1000}s;
  animation-name: ${props => (props.isAnimationTrigger ? ContainerAnimation : AddAnimation)};
  overflow: hidden;
`;

export const Block = styled.div<{ color: string; isDelete?: boolean; animationDuration: number }>`
  margin: 1vw;
  display: flex;
  flex-shrink: 0;
  width: 20vw;
  aspect-ratio: 1 / 1;
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 10px;
  background: ${props => props.color};
  animation-duration: ${props => props.animationDuration / 1000}s;
  animation-name: ${props => (props.isDelete ? DeleteAnimation : AddAnimation)};
`;
