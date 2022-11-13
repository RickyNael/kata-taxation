export class Category {
   id: number
   name: string;
   tax: number;

  constructor(id: number, name: string, tax: number) {
    this.id = id;
    this.name = name;
    this.tax = tax;
  }
}
