export interface ServiceType {
  id?: number;
  text?: any;
  image?: string;
  image2?: string;
  title_for_image?: string;
  title_for_image2?: string;
  mainimages_set?: MainImage[];
  videos_set?: Video[];
  materials_set?: Material[];
  bigimage_set?: BigImage[];
  secondvideos_set?: SecondVideo[];
  carousel_set?: Carousel[];
  carouselitem_set?: CarouselItem[];
  subscriptionplans_set?: SubscriptionPlan[];
  sizeandprices_set?: SizeAndPrice[];
  handmade_set?: HandMade[];
  process_set?: Process[];
  benefits_set?: Benefit[];
  need_set?: Need[];
}

export interface MainImage {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface Video {
  id?: number;
  video_link?: string;
  image?: string;
  image2?: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface Material {
  id?: number;
  image?: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface BigImage {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface SecondVideo {
  id?: number;
  video1_link?: string;
  video2_link?: string;
  video3_link?: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface Carousel {
  id?: number;
  title?: string;
  text?: any;
  category?: number;
}

export interface CarouselItem {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  carousel?: number;
}

export interface SubscriptionPlan {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface SizeAndPrice {
  id?: number;
  image: string;
  size?: string;
  square?: string;
  price?: string;
  old_price?: string;
  expression?: string;
  description?: string;
  category?: number;
}

export interface HandMade {
  id?: number;
  image: string;
  size?: string;
  square?: string;
  price?: string;
  old_price?: string;
  expression?: string;
  description?: string;
  category?: number;
}

export interface Process {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  text2?: string;
  category?: number;
}

export interface Benefit {
  id?: number;
  text?: any;
  category?: number;
}

export interface Need {
  id?: number;
  image: string;
  title?: string;
  extra_info?: string;
  category?: number;
}
