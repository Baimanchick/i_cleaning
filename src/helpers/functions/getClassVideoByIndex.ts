export const getClassVideoByIndex = (index: number, styles: any) => {
  switch (index) {
    case 0:
      return styles.video_1;
    case 1:
      return styles.video_2;
    case 2:
      return styles.video_3;
    case 3:
      return styles.video_4;
    case 4:
      return styles.video_5;
    default:
      return "";
  }
};
