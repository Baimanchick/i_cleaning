import { RefObject } from "react";

export interface MenuItem {
  label: string;
  action?: () => void;
  ref?: NavbarRefs | any;
}

export interface NavbarProps {
  refs: NavbarRefs;
}

export interface NavbarRefs {
  serviceRef: RefObject<HTMLDivElement>;
  customerRef: RefObject<HTMLDivElement>;
  videoRef: RefObject<HTMLDivElement>;
  faqRef: RefObject<HTMLDivElement>;
  mainRef: RefObject<HTMLDivElement>;
  trustRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
}
