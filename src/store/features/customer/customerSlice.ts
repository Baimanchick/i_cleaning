import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { API_URL } from "@/utils/const";
import $axios from "@/utils/axios";
import { CustomerType } from "@/helpers/interfaces/customer.interface";

export interface CustomerState {
  customer: CustomerType[] | undefined;
  loading: boolean;
}

const initialState: CustomerState = {
  customer: [],
  loading: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<CustomerState>) => {
      state.customer = action.payload.customer;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomer.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCustomer.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchCustomer.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const fetchCustomer = createAsyncThunk<unknown, void>(
  "customer/fetchCustomer",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await $axios.get(`${API_URL}/buttons/images/`);
      const data: CustomerState = { customer: response.data, loading: false };

      dispatch(customerSlice.actions.setCustomer(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);

export const { setCustomer } = customerSlice.actions;
export default customerSlice.reducer;
