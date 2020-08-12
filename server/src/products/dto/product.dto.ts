// DTO => Data Transfer Object
// Basically what the structure of the data (aka schema) should look like

export class CreateProductDto {
  name: string;
  description: string;
  price: string;
}

export class UpdateProductDto {
  name: string;
  description: string;
  price: string;
}
