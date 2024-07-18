import { createSlice } from '@reduxjs/toolkit';

interface IBox {
  color: string;
  isDelete?: boolean;
}

interface IState {
  boxesList: IBox[];
}

const initialState: IState = {
  boxesList: [],
};

export const boxesSlice = createSlice({
  name: 'boxes',
  initialState,
  reducers: {
    addBox: (state, action) => {
      state.boxesList = [action.payload, ...state.boxesList];
    },
    predeleteBox: state => {
      state.boxesList[state.boxesList.length - 1].isDelete = true;
    },
    deleteBox: state => {
      state.boxesList.pop();
    },
  },
});

export const { addBox, deleteBox, predeleteBox } = boxesSlice.actions;

export default boxesSlice.reducer;
