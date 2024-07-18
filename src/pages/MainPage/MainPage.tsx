import { Button } from '../../core/Button';
import { Typography } from '../../core/Typography';
import { addBox, deleteBox } from '../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { ActionContainer, Block, Container, MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const boxesList = useAppSelector(state => state.boxesList);
  const addBoxFunc = () => {
    const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    dispatch(addBox({ color: randomColor }));
  };
  const deleteBoxFunc = () => {
    dispatch(deleteBox());
  };
  return (
    <MainWrapper>
      <MainContent>
        <Typography variant="h1">Тестовое задание</Typography>
        <ActionContainer>
          <Button onClick={addBoxFunc}>Добавить блок</Button>
          <Button onClick={deleteBoxFunc}>Удалить блок</Button>
        </ActionContainer>
        <Container>
          {boxesList.map(item => (
            <Block key={item.color} color={item.color} />
          ))}
        </Container>
      </MainContent>
    </MainWrapper>
  );
};
