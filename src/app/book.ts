export interface IBook {
    id: string;
    title: string;
    author: string;
    subtitle: string;
    price: number;
}

let idGen = 0;

export class Book implements IBook {
    id: string;
    title: string;
    author: string;
    subtitle: string;
    price: number;
    constructor(title = '', author = '', subtitle = '', price = 0) {
        this.id = String(++idGen);
        this.title = title;
        this.author = author;
        this.subtitle = subtitle;
        this.price = price;
    }
}