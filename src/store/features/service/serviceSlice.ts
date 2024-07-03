import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ServiceType } from "@/helpers/interfaces/service.interface";
import { API_URL } from "@/utils/const";
import $axios from "@/utils/axios";

export interface ServiceState {
  service: ServiceType[];
  loading: boolean;
}

const initialState: ServiceState = {
  service: [],
  loading: false,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<ServiceState>) => {
      state.service = action.payload.service;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchService.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchService.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const fetchService = createAsyncThunk<unknown, void>(
  "service/fetchService",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await $axios.get(`${API_URL}/categories/`);
      const data: ServiceState = { service: response.data, loading: false };

      dispatch(serviceSlice.actions.setService(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);

export const { setService } = serviceSlice.actions;
export default serviceSlice.reducer;
