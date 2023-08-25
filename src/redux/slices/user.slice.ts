import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  id: 'fh',
  name: 'example',
  email: 'example@gmail.com',
  cognitoID: 'srg',
  createdAt: '24 july',
  deleted: false,
  stripe_account: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (
      state: typeof initialState,
      action: PayloadAction<typeof initialState>,
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.cognitoID = action.payload.cognitoID;
      state.email = action.payload.email;
      state.deleted = action.payload.deleted;
      state.createdAt = action.payload.createdAt;
      state.stripe_account = action.payload.stripe_account;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
