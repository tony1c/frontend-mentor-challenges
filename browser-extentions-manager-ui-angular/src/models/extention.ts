export interface ExtentionInterface {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export type FilterType = 'all' | 'active' | 'inactive';
