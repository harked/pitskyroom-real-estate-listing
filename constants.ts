
import { Property, PropertyType } from './types';

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: '1',
    image: 'https://picsum.photos/seed/house1/600/400',
    price: 750000,
    address: '123 Ocean View Dr, Malibu, CA',
    bedrooms: 4,
    bathrooms: 3,
    type: PropertyType.HOUSE,
    description: 'Stunning modern home with panoramic ocean views. Features an open-concept living area, gourmet kitchen, and a spacious deck perfect for entertaining.',
    contactName: 'Jane Doe',
    contactPhone: '555-123-4567',
  },
  {
    id: '2',
    image: 'https://picsum.photos/seed/apt1/600/400',
    price: 3200,
    address: '456 High Street, Apt 12B, San Francisco, CA',
    bedrooms: 2,
    bathrooms: 2,
    type: PropertyType.APARTMENT,
    description: 'Chic downtown apartment with city views. Recently renovated with hardwood floors, stainless steel appliances, and in-unit laundry.',
    contactName: 'John Smith',
    contactPhone: '555-987-6543',
  },
  {
    id: '3',
    image: 'https://picsum.photos/seed/condo1/600/400',
    price: 450000,
    address: '789 Lakefront Ave, Unit 301, Chicago, IL',
    bedrooms: 2,
    bathrooms: 1,
    type: PropertyType.CONDO,
    description: 'Bright and airy condo with beautiful lake views. Building amenities include a fitness center, pool, and 24-hour doorman.',
    contactName: 'Emily White',
    contactPhone: '555-345-6789',
  },
  {
    id: '4',
    image: 'https://picsum.photos/seed/house2/600/400',
    price: 550000,
    address: '101 Maple St, Austin, TX',
    bedrooms: 3,
    bathrooms: 2,
    type: PropertyType.HOUSE,
    description: 'Charming craftsman home with a large backyard and mature trees. Features a cozy fireplace and a newly remodeled kitchen.',
    contactName: 'Michael Brown',
    contactPhone: '555-234-5678',
  },
   {
    id: '5',
    image: 'https://picsum.photos/seed/townhouse1/600/400',
    price: 620000,
    address: '22 River Walk, Boston, MA',
    bedrooms: 3,
    bathrooms: 3,
    type: PropertyType.TOWNHOUSE,
    description: 'Elegant brick townhouse in a historic neighborhood. Three levels of living space, a private patio, and walking distance to shops and restaurants.',
    contactName: 'Sarah Green',
    contactPhone: '555-876-5432'
  },
  {
    id: '6',
    image: 'https://picsum.photos/seed/apt2/600/400',
    price: 2800,
    address: '55 Skyview Terrace, Apt 5, Denver, CO',
    bedrooms: 1,
    bathrooms: 1,
    type: PropertyType.APARTMENT,
    description: 'Modern loft-style apartment with high ceilings and large windows offering incredible mountain views. Includes access to a rooftop deck.',
    contactName: 'David Lee',
    contactPhone: '555-765-4321'
  }
];

export const PROPERTY_TYPE_OPTIONS = [
  'ALL', ...Object.values(PropertyType)
];