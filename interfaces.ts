export interface Company {
  company_id: number;
  company_name: string;
  image_url: string;
  excerpt: string;
  industry: string;
  location: string;
  company_size: string;
  use_case: string[];
  word_count: number;
}

export interface Filters {
  use_case: string[];
  location: string[];
  company_size: string[];
  industry: string[];
}
