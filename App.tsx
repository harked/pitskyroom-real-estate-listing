
import React, { useState, useEffect, useCallback } from 'react';
import { Property, Filters } from './types';
import { INITIAL_PROPERTIES } from './constants';
import Header from './components/Header';
import Filter from './components/Filter';
import PropertyList from './components/PropertyList';
import AddPropertyModal from './components/AddPropertyModal';

const App: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    maxPrice: 0,
    type: 'ALL',
    bedrooms: 0,
    bathrooms: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = useCallback(<K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  useEffect(() => {
    let tempProperties = [...properties];

    if (filters.minPrice > 0) {
      tempProperties = tempProperties.filter(p => p.price >= filters.minPrice);
    }
    if (filters.maxPrice > 0) {
      tempProperties = tempProperties.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.type !== 'ALL') {
      tempProperties = tempProperties.filter(p => p.type === filters.type);
    }
    if (filters.bedrooms > 0) {
      tempProperties = tempProperties.filter(p => p.bedrooms >= filters.bedrooms);
    }
    if (filters.bathrooms > 0) {
      tempProperties = tempProperties.filter(p => p.bathrooms >= filters.bathrooms);
    }

    setFilteredProperties(tempProperties);
  }, [properties, filters]);

  const handleAddProperty = (newProperty: Property) => {
    setProperties(prev => [newProperty, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header onAddPropertyClick={() => setIsModalOpen(true)} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <PropertyList properties={filteredProperties} />
      </main>
      <AddPropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProperty={handleAddProperty}
      />
    </div>
  );
};

export default App;