
export interface Conference {
  id: string;
  name: string;
  clubsCount: number;
  imageUrl: string;
  locations?: string[];
}

export interface Category {
  id: string;
  label: string;
  title: string;
  isMain?: boolean;
  isSpecial?: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
