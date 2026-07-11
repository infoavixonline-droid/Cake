export interface Cake {
  id: string;
  name: string;
  price: number;
  occasion: string[];
  description: string;
  weightOptions: string[];
  mostPicked: boolean;
  bestSelling: boolean;
  dateAdded: string;
  inStock: boolean;
  accentColor: string; // Tailwind color class helper like 'pink', 'emerald', 'purple', etc.
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  weightOption: string;
}

export type ViewType = 'home' | 'store' | 'about' | 'contact' | 'cart' | 'details';

export interface ViewState {
  type: ViewType;
  cakeId?: string; // used for 'details' view
}
