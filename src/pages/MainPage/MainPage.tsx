import { addBox, deleteBox } from '../../store/reducers/root-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import { MainContent, MainWrapper } from './MainPage.style';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const boxesList = useAppSelector(state => state.boxesList);
  const addBoxFunc = () => {
    dispatch(addBox({ color: 'red' }));
  };
  const deleteBoxFunc = () => {
    dispatch(deleteBox());
  };
  return (
    <MainWrapper>
      <MainContent>
        Start
        <button onClick={addBoxFunc}>add</button>
        <button onClick={deleteBoxFunc}>delete</button>
        {boxesList.map(item => (
          <p key={item.color}>{item.color}</p>
        ))}
      </MainContent>
    </MainWrapper>
  );
};
