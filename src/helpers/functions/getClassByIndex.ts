export const getClassByIndex = (index: number, styles: any) => {
  switch (index) {
    case 0:
      return styles.image_1;
    case 1:
      return styles.image_2;
    case 2:
      return styles.image_3;
    case 3:
      return styles.image_4;
    case 4:
      return styles.image_5;
    default:
      return "";
  }
};
