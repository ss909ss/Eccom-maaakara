export interface User {
    id: string;
    name: string;
    email: string;
    password: string; 
    createBanner?: Banner[];
    createMeatJerks?: MeatJerk[];
    createPigJerks?: PigJerk[];
    createSausages?: Sausage[];
    createPacking?: Packing[];

  }

  export interface Banner {
    id: string;
    image: string;
    userId: string;
  }
  
  export interface MeatJerk {
    id: string;
    title: string;
    description: string;
    category: string;
    quantity: number;
    price: number;
    image: string;
    userId: string;
  }
  

  export interface PigJerk {
    id: string;
    title: string;
    description: string;
    category: string;
    quantity: number;
    price: number;
    image: string;
    userId: string;
  }
  
  export interface Sausage {
    id: string;
    title: string;
    description: string;
    category: string;
    quantity: number;
    price: number;
    image: string;
    userId: string;
  }

  export interface Packing {
    id: string;
    title: string;
    description: string;
    category: string;
    quantity: number;
    price: number;
    image: string;
    userId: string;
  }





  export interface UserData {
    email: string;
    password: string;
    name: string; // If this is required for your API
  }