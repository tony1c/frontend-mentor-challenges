import { CartState } from '../../models/product.model';

export const initialCartState: CartState = {
  products: [
    {
      image: {
        thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
        mobile: './assets/images/image-tiramisu-mobile.jpg',
        tablet: './assets/images/image-tiramisu-tablet.jpg',
        desktop: './assets/images/image-tiramisu-desktop.jpg',
      },
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.5,
      id: crypto.randomUUID(),
      quantity: 1,
      productsPrice: 5.5,
    },
    {
      image: {
        thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
        mobile: './assets/images/image-creme-brulee-mobile.jpg',
        tablet: './assets/images/image-creme-brulee-tablet.jpg',
        desktop: './assets/images/image-creme-brulee-desktop.jpg',
      },
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.0,
      id: crypto.randomUUID(),
      quantity: 4,
      productsPrice: 28,
    },

    {
      image: {
        thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
        mobile: './assets/images/image-panna-cotta-mobile.jpg',
        tablet: './assets/images/image-panna-cotta-tablet.jpg',
        desktop: './assets/images/image-panna-cotta-desktop.jpg',
      },
      name: 'Vanilla Panna Cotta',
      category: 'Panna Cotta',
      price: 6.5,
      id: crypto.randomUUID(),
      quantity: 2,
      productsPrice: 13,
    },
  ],
  totalQuantity: 7,
  totalPrice: 46.5,
};
