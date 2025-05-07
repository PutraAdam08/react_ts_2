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

export type { Search, Product };