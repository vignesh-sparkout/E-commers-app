import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  category: string;
  brand: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
     {
    id: 1,
    category: 'Laptop',
    brand: 'Dell',
    name: 'Dell Inspiron',
    price: 55000,
    description: 'Dell laptop with i5 processor',
    image: '/Images/dell.avif'
  },
    {
    id: 2,
    category: 'Laptop',
    brand: 'HP',
    name: 'HP Pavilion',
    price: 60000,
    description: 'HP laptop with Ryzen processor',
    image: '/Images/hp.jpg'

  },

  {
    id: 3,
    category: 'Laptop',
    brand: 'Lenovo',
    name: 'Lenovo Legion 9',
    price: 50000,
    description: 'Lenovo slim laptop',
     image: '/Images/lenovo.webp'

  },

  {
    id: 4,
    category: 'Mobile',
    brand: 'Samsung',
    name: 'Samsung Galaxys S15',
    price: 35000,
    description: 'Samsung 5G smartphone',
    image: '/Images/samsuns20.webp'

  },
    {
    id: 5,
    category: 'Mobile',
    brand: 'Vivo',
    name: 'Vivo v29',
    price: 38000,
    description: 'Latest Vivo smartphone',
    image: '/Images/vivov29.png'

  },

  {
    id: 6,
    category: 'Mobile',
    brand: 'Apple',
    name: 'iPhone 15',
    price: 80000,
    description: 'Latest Apple Iphone',
    image: '/Images/iphone15.webp'

  },

  {
    id: 7,
    category: 'Watch',
    brand: 'Titan',
    name: 'Titan Watch',
    price: 5000,
    description: 'Smart fitness watch',
    image: '/Images/titan.jpg'

  },
    {
    id: 8,
    category: 'Watch',
    brand: 'Apple',
    name: 'Apple Smart Watch',
    price: 20000,
    description: 'Smart watch with more Futures',
    image: '/Images/applewatch.avif'

  },
 {
    id: 9,
    category: 'Watch',
    brand: 'Casio',
    name: 'Casio Smart watch',
    price: 20000,
    description: 'Smart watch with more Futures',
    image: '/Images/casio.webp'
  },
   {
    id: 10,
    category: 'HeadPhone', 
    brand: 'Sony',
    name: 'Sony CH520',
    price: 3490,
    description: 'Sony WH-CH520 Wireless Bluetooth Headphones with Mic',
    image: '/Images/sony5h.jpg'
  },
   {
    id: 11,
    category: 'HeadPhone',
    brand: 'JBL',
    name: 'JBL Tune 770NC',
    price:4699,
    description: 'JBL Tune 770NC Wireless Over Ear ANC Headphones with Mic',
    image: '/Images/jbl.jpg'
  }, 
  {
    id: 12,
    category: 'HeadPhone',
    brand: 'Boat',
    name: 'boAt Rockerz 550',
    price: 2000,
    description: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones',
    image: '/Images/boat.jpg'
  },

    {
    id: 13,
    category: 'TV',
    brand: 'Samsung',
    name: 'Samsung QLED Ultra Hd',
    price: 97890,
    description: "The Samsung QLED Ultra HD 4K Smart Tizen TV appeals to viewers seeking exceptional brightness, vibrant colours, and deep contrast for immersive entertainment",
    image: '/Images/samsung.jpg'
  },
    {
    id: 14,
    category: 'TV',
    brand: 'LG',
    name: 'LG QNED Ai QNED80',
    price: 44999,
    description: 'The LG QNED AI QNED80 4K Smart TV (2025) blends LG’s QNED color technology with the α7 AI 4K processor to deliver vivid images and lifelike sound for immersive home entertainment',
    image: '/Images/lg.webp'
  },
    {
    id: 15,
    category: 'TV',
    brand: 'TCL',
    name: 'TCL 4K Ultra',
    price: 35400,
    description: 'The TCL 4K Ultra HD Google Smart LED TV P6K offers an impressive balance of affordability, modern design, and strong 4K HDR performance with Google TV integration.',
    image: '/Images/tcl.jpg'
  },
   {
    id: 16,
    category: 'Camera',
    brand: 'Canon',
    name: 'Canon EOS R10 ',
    price: 92499,
    description: 'The Canon EOS R10 mirrorless camera is ideal for photography enthusiasts seeking speed, portability, and strong autofocus in a compact body. Reviewers consistently highlight its impressive image quality.',
    image: '/Images/cannon.webp'
  },
   {
    id: 17,
    category: 'Camera',
    brand: 'Nikon',
    name: 'Nikon Z50',
    price: 73020,
    description: 'The Nikon Z50 II delivers impressive performance for its compact size and price, appealing to both beginners and enthusiasts seeking strong still and video capabilities.',
    image: '/Images/nikon50.jpg'
  },
   {
    id: 18,
    category: 'Camera',
    brand: 'Panasonic',
    name: 'Panasonic Lumix DC-S1',
    price: 159990,
    description:'The Panasonic Lumix DC-S1 appeals to serious photographers seeking a rugged, professional-grade full-frame mirrorless camera with excellent image quality, rich colour output and class-leading stabilisation.',
    image: '/Images/panasonic.jpg'
  }



  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
