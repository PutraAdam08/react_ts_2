interface Search {
    searchTerm : string;
    setSearchTerm: any;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface Credential {
    'username': string;
    'password': string;
}

interface Cart {
    'id'        : number;
    'userId'    : number;
    'products'  : Product[];
}

interface CartProduct {
    userId: number;
    product: Product;
    quantity: number;
}

export type { Search, Product, Credential, Cart, CartProduct };