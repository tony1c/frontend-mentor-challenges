export interface Product {
  image: Image;
  name: string;
  category: string;
  price: number;
}

export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CartProduct extends Product {
  quantity: number;
  productsPrice: number;
}

export interface CartState {
  products: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}

export type ImageType = 'mobile' | 'tablet' | 'desktop';
