import { useState } from 'react';

import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography';
import { addBox, deleteBox, predeleteBox } from '../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { ActionContainer, Block, Container, MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const boxesList = useAppSelector(state => state.boxesList);

  const [isAnimationTrigger, setAnimationTrigger] = useState(false);
  const addBoxFunc = () => {
    const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

    setAnimationTrigger(prev => !prev);
    dispatch(addBox({ color: randomColor }));
  };
  const deleteBoxFunc = () => {
    dispatch(predeleteBox());
    setTimeout(() => {
      dispatch(deleteBox());
    }, 400);
  };
  return (
    <MainWrapper>
      <MainContent>
        <Typography variant="h1">Тестовое задание</Typography>
        <ActionContainer>
          <Button onClick={addBoxFunc}>Добавить блок</Button>
          <Button onClick={deleteBoxFunc} disabled={boxesList.length === 0}>
            Удалить блок
          </Button>
        </ActionContainer>
        <Container isAnimationTrigger={isAnimationTrigger}>
          {boxesList.map(item => (
            <Block key={item.color} color={item.color} isDelete={item.isDelete} />
          ))}
        </Container>
      </MainContent>
    </MainWrapper>
  );
};
