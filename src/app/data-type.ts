export interface SignUp {
    name: string;
    password: string;
    email: string;
}

export interface Login {
    email: string;
    password: string;
}

export interface productDataType {
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    color: string;
}