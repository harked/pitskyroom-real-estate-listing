
export enum PropertyType {
  HOUSE = 'House',
  APARTMENT = 'Apartment',
  CONDO = 'Condo',
  TOWNHOUSE = 'Townhouse',
}

export interface Property {
  id: string;
  image: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  type: PropertyType;
  description: string;
  contactName: string;
  contactPhone: string;
}

export interface Filters {
  minPrice: number;
  maxPrice: number;
  type: PropertyType | 'ALL';
  bedrooms: number;
  bathrooms: number;
}