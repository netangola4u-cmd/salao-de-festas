
export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}
