export interface Artifact {
  id: string;
  title: string;
  description: string;
  category: string[];
  image?: string;
  icon?: string;
  spanClass: string;
  delay: number;
}

export interface ChronologyItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  delay: number;
}
