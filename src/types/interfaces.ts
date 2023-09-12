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
  available: string;
  free: boolean;
  consultation: number;
  reviews: number;
}
