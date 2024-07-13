import { SecondVideo, Video } from "@/helpers/interfaces/service.interface";

export interface ExtraInfoServiceProps {
  service: SecondVideo[] | Video[] | undefined;
  style?: React.CSSProperties;
}
