import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "services/api";

export const Status = {
  IDLE: "Idle",
  FETCHING: "Fetching",
  FETCHED: "Fetched",
  FAILED: "Failed",
  ASKING: "Asking",
  ASKED: "Asked",
  ASK_FAILED: "Ask_Failed",
};

const initialState = {
  status: Status.IDLE,
  services: [],
  announcements: [],
};

export const fetchDocument = createAsyncThunk(
  "config/fetchDocument",
  async () => {
    const response = await api.find(`/document`);
    return {
      documentXLSX: response?.documentXLSX,
    };
  }
);

export const fetchServices = createAsyncThunk(
  "config/fetchServices",
  async () => {
    const services = await api.find(`/services`);
    return {
      services,
    };
  }
);

export const fetchAnnouncements = createAsyncThunk(
  "config/fetchAnnouncements",
  async () => {
    //const [services] = await Promise.all([api.find(`/services`)]);
    const announcements = await api.find(`/announcement`);
    return {
      announcements,
    };
  }
);

export const sendEmailRequest = createAsyncThunk(
  "config/sendEmailRequest",
  async (request) => {
    const mailResponse = await api.create(`/customers`, request);
    return {
      mailResponse,
    };
  }
);

const slice = createSlice({
  name: "config",

  initialState,
  reducers: {
    setStatus(state, action) {
      const { status } = action.payload;
      state.status = status;
    },
  },
  extraReducers: {
    [fetchDocument.pending](state) {
      state.status = Status.FETCHING;
    },
    [fetchDocument.fulfilled](state, action) {
      const { documentXLSX } = action.payload;

      return {
        ...state,
        status: Status.FETCHED,
        documentXLSX,
      };
    },

    [fetchDocument.rejected](state) {
      state.status = Status.FAILED;
    },
    [fetchServices.pending](state) {
      state.status = Status.FETCHING;
    },

    [fetchServices.fulfilled](state, action) {
      const { services } = action.payload;

      return {
        ...state,
        status: Status.FETCHED,
        services,
      };
    },

    [fetchServices.rejected](state) {
      state.status = Status.FAILED;
    },
    [fetchAnnouncements.pending](state) {
      state.status = Status.FETCHING;
    },

    [fetchAnnouncements.fulfilled](state, action) {
      const { announcements } = action.payload;

      return {
        ...state,
        status: Status.FETCHED,
        announcements,
      };
    },

    [fetchAnnouncements.rejected](state) {
      state.status = Status.FAILED;
    },
    [sendEmailRequest.pending](state) {
      state.status = Status.ASKING;
    },

    [sendEmailRequest.fulfilled](state, action) {
      //const { mailResponse } = action.payload;
      return {
        ...state,
        status: Status.ASKED,
      };
    },

    [sendEmailRequest.rejected](state) {
      state.status = Status.ASK_FAILED;
    },
  },
});

export default slice.reducer;

export const { setStatus } = slice.actions;

export const selectStatus = (state) => state.config.status;
export const selectServices = (state) => state.config.services;
export const selectAnnouncements = (state) => state.config.announcements;
