import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { API_URL } from "@/utils/const";
import $axios from "@/utils/axios";
import { VideoType } from "@/helpers/interfaces/video.interface";

export interface VideoState {
  video: VideoType[];
  loading: boolean;
}

const initialState: VideoState = {
  video: [],
  loading: false,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<VideoState>) => {
      state.video = action.payload.video;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVideo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(fetchVideo.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const fetchVideo = createAsyncThunk<unknown, void>(
  "video/fetchVideo",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await $axios.get(`${API_URL}/buttons/videos/`);
      const data: VideoState = { video: response.data, loading: false };

      dispatch(videoSlice.actions.setVideo(data));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response!.data.message);
      }
    }
  }
);

export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
