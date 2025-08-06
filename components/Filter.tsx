
import React from 'react';
import { Filters, PropertyType } from '../types';
import { PROPERTY_TYPE_OPTIONS } from '../constants';

interface FilterProps {
  filters: Filters;
  onFilterChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const numericValue = ['minPrice', 'maxPrice', 'bedrooms', 'bathrooms'].includes(name) ? Number(value) : value;
    onFilterChange(name as keyof Filters, numericValue as any);
  };
  
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-8 sticky top-20 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Price Range */}
        <div className="flex flex-col sm:flex-row gap-2 col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="w-full">
            <label htmlFor="minPrice" className="block text-sm font-medium text-slate-700">Min Price</label>
            <input type="number" name="minPrice" id="minPrice"
                   value={filters.minPrice || ''} onChange={handleInputChange} placeholder="Any"
                   className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"/>
          </div>
           <div className="w-full">
            <label htmlFor="maxPrice" className="block text-sm font-medium text-slate-700">Max Price</label>
            <input type="number" name="maxPrice" id="maxPrice"
                   value={filters.maxPrice || ''} onChange={handleInputChange} placeholder="Any"
                   className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"/>
          </div>
        </div>
        {/* Property Type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-slate-700">Property Type</label>
          <select name="type" id="type" value={filters.type} onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm">
            {PROPERTY_TYPE_OPTIONS.map(type => (
              <option key={type} value={type}>{type === 'ALL' ? 'All Types' : type}</option>
            ))}
          </select>
        </div>
        {/* Bedrooms */}
        <div>
          <label htmlFor="bedrooms" className="block text-sm font-medium text-slate-700">Min. Bedrooms</label>
          <input type="number" name="bedrooms" id="bedrooms" min="0"
                 value={filters.bedrooms || ''} onChange={handleInputChange} placeholder="Any"
                 className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"/>
        </div>
        {/* Bathrooms */}
        <div>
          <label htmlFor="bathrooms" className="block text-sm font-medium text-slate-700">Min. Bathrooms</label>
          <input type="number" name="bathrooms" id="bathrooms" min="0"
                 value={filters.bathrooms || ''} onChange={handleInputChange} placeholder="Any"
                 className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"/>
        </div>
      </div>
    </div>
  );
};

export default Filter;