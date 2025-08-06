
import React from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-slate-600">No properties found.</h2>
        <p className="text-slate-500 mt-2">Try adjusting your filters or check back later!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;