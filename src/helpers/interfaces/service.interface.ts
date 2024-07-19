export interface ServiceType {
  id?: number;
  text?: any;
  image?: string;
  image2?: string;
  title_for_image?: string;
  title_for_image2?: string;
  mainimages_set?: MainImage[];
  videos_set?: Video[];
  material_set?: Material[];
  bigimage_set?: BigImage[];
  service_set: ServiceSet[];
  secondvideos_set?: SecondVideo[];
  carousel_set?: CarouselType[];
  carouselitem_set?: CarouselItem[];
  subscriptionplans_set?: SubscriptionPlan[];
  sizeandprices_set?: SizeAndPrice[];
  handmade_set?: HandMade[];
  process_set?: ProcessType[];
  benefits_set?: Benefit[];
  need_set?: Need[];
  card_set?: CardSet[];
}

export interface MainImage {
  id?: number;
  image: string;
  title?: string;
  text?: any;
  category?: number;
}

export interface ServiceSet {
  id?: number;
  category?: number;
  items?: ServiceSetItems[];
  name?: string;
  title?: string;
}

export interface ServiceSetItems {
  id?: number;
  image?: string;
  service?: number;
  title: string;
  text: string | any;
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

export interface CarouselType {
  id?: number;
  title?: string;
  text?: any;
  category?: number;
  items?: CarouselItem[];
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

export interface ProcessType {
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
  title?: string;
  category?: number;
}

export interface Need {
  id?: number;
  image: string;
  title?: string;
  items?: NeedItems[];
  category?: number;
  svg: string;
}

export interface NeedItems {
  id: number;
  need: number;
  text: string;
  title: string;
}

export interface CardItem {
  card: number;
  desciprtion: string;
  expression: string | null;
  extra_info: string[];
  id: number;
  image: string;
  is_discount: boolean;
  is_house: boolean;
  is_simple: boolean;
  old_price: string | null;
  price: string;
  size: string | null;
  square: string | null;
  title: string;
  title2: string | null;
}

export interface CardSet {
  category: number;
  id: number;
  items: CardItem[];
  title: string;
}
