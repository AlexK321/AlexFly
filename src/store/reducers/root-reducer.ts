import { createSlice } from '@reduxjs/toolkit';

interface IBox {
  color: string;
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
      state.boxesList = [...state.boxesList, action.payload];
    },
    deleteBox: state => {
      state.boxesList.pop();
    },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(fetchUsers.pending, state => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(fetchUsers.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.users = action.payload;
    //   })
    //   .addCase(fetchUsers.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error;
    //   });
  },
});

export const { addBox, deleteBox } = boxesSlice.actions;

export default boxesSlice.reducer;
