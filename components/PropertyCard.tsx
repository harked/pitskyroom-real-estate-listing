
import React from 'react';
import { Property, PropertyType } from '../types';
import BedIcon from './icons/BedIcon';
import BathIcon from './icons/BathIcon';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <img className="w-full h-56 object-cover" src={property.image} alt={`View of ${property.address}`} />
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-100 px-2 py-1 rounded-full">{property.type}</span>
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold text-slate-900">{formattedPrice}</span>
          {property.type === PropertyType.APARTMENT && <span className="text-lg text-slate-500">/month</span>}
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mt-2 truncate">{property.address}</h3>
        <p className="text-slate-600 mt-2 text-sm flex-grow">{property.description}</p>
        <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center text-slate-700">
          <div className="flex items-center gap-2">
            <BedIcon className="h-5 w-5 text-teal-500" />
            <span className="font-medium">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-2">
            <BathIcon className="h-5 w-5 text-teal-500" />
            <span className="font-medium">{property.bathrooms} baths</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;