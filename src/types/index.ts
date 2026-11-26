export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface News {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
};