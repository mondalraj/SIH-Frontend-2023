export interface BlogCardProps {
  Image: string;
  Heading: string;
  Description: string;
  id: number;
}

export interface ButtonProps {
  name: string;
}

export interface CardsProps {
  name: string;
  languages: Array<string>;
  id: string;
  available: string;
  about: string;
  latestCaseType: string;
  image: string;
  free: boolean;
  consultation: number;
  email: string;
  reviews: number;
}

export interface ModalProps {
  name: string;
  about: string;
  email: string;
  latestCaseType: string;
  setshow: Function;
}
