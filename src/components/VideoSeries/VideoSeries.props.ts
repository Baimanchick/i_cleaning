import { VideoType } from "@/helpers/interfaces/video.interface";

export interface VideoSeriesProps {
  video: VideoType[] | undefined;
  loading: any;
}
