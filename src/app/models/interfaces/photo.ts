export interface Photo {
  title: string;
  link: string;
  media: Media;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface Media {
  m: string;
}
