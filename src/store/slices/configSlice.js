import { createSlice } from "@reduxjs/toolkit";
import { getEvents } from "./configThunk";

const LOADING_STATUS = { IDLE: "idle", LOADING: "loading" };

const configSlice = createSlice({
  name: "config",
  initialState: {
    status: LOADING_STATUS.IDLE,
  },
  reducers: {
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    clearRowData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.status = LOADING_STATUS.LOADING;
      })
      .addCase(getEvents.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = LOADING_STATUS.IDLE;
      })
      .addCase(getEvents.rejected, (state) => {
        state.status = LOADING_STATUS.IDLE;
      });
  },
});

export const { setSelectedEvent, clearRowData } = configSlice.actions;

export const selectRowData = (state) => state.config.data;
export const selectSelectedEvent = (state) => state.config.selectedEvent;
export const selectIsLoading = (state) =>
  state.config.status === LOADING_STATUS.LOADING ?? false;

export default configSlice;
