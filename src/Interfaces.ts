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

export type { Search, Product, Credential };