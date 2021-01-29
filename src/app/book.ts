export interface IBook {
    title: string;
    author: string;
    subtitle: string;
    price: number;
}

export class Book implements IBook {
    title: string;
    author: string;
    subtitle: string;
    price: number;
    constructor(title = '', author = '', subtitle = '', price = 0) {
        this.title = title;
        this.author = author;
        this.subtitle = subtitle;
        this.price = price;
    }
}