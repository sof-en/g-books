export interface Root {
  count: number;
  next: string;
  previous: number;
  results: ResultData[];
}

export interface ResultData {
  id: number;
  title: string;
  authors: Author[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}

export interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface Formats {
  "text/html": string;
  "application/epub+zip": string;
  "application/x-mobipocket-ebook": string;
  "application/rdf+xml": string;
  "image/jpeg": string;
  "text/plain; charset=us-ascii": string;
  "application/octet-stream": string;
  "audio/mp4"?: string
}
