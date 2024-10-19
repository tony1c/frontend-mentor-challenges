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

export interface CartProduct {
  id: string;
  quantity: number;
  product: Product;
}
