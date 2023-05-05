import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {FansState, SetFansCountPayload} from '../entities';

const initialState: FansState = {
  male: [],
  female: [],
  other: [],
};

const fansSlice = createSlice({
  name: 'fans',
  initialState,
  reducers: {
    setFansCount: (
      state: FansState,
      action: PayloadAction<SetFansCountPayload>,
    ) => {
      const {type, personId} = action.payload;
      state[type] = state[type].includes(personId)
        ? state[type].filter(id => id !== personId)
        : [...state[type], personId];
    },
    clearFansCount: () => ({
      ...initialState,
    }),
  },
});

export default fansSlice;
