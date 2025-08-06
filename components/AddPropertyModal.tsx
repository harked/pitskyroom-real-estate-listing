
import React, { useState, useCallback } from 'react';
import { Property, PropertyType } from '../types';
import { generateDescription } from '../services/geminiService';
import SparklesIcon from './icons/SparklesIcon';

interface AddPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProperty: (property: Property) => void;
}

const initialFormState: Omit<Property, 'id' | 'image'> = {
  price: 0,
  address: '',
  bedrooms: 1,
  bathrooms: 1,
  type: PropertyType.HOUSE,
  description: '',
  contactName: '',
  contactPhone: '',
};

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({ isOpen, onClose, onAddProperty }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string>('');
  const [descriptionKeywords, setDescriptionKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setBase64Image(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateDescription = useCallback(async () => {
    if (!descriptionKeywords) return;
    setIsGenerating(true);
    try {
      const generatedText = await generateDescription(descriptionKeywords);
      setFormData(prev => ({ ...prev, description: generatedText }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  }, [descriptionKeywords]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!base64Image || !formData.address || !formData.price) {
        setError('Please fill in all required fields: Image, Address, and Price.');
        return;
    }
    setError('');
    const newProperty: Property = {
        id: new Date().toISOString(),
        ...formData,
        price: Number(formData.price),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        image: base64Image,
    };
    onAddProperty(newProperty);
    // Reset form
    setFormData(initialFormState);
    setImagePreview(null);
    setBase64Image('');
    setDescriptionKeywords('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">List a New Property</h2>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{error}</div>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Image Upload */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">Property Image*</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            {imagePreview ? <img src={imagePreview} alt="Property preview" className="mx-auto h-48 w-auto rounded-md" /> : <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 4v.01M28 8L20 16m0 0L12 8m8 8v12a4 4 0 01-4 4H8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            <div className="flex text-sm text-slate-600">
                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

              {/* Form fields */}
              <input type="text" name="address" placeholder="Address*" value={formData.address} onChange={handleInputChange} className="md:col-span-2 p-2 border rounded" required />
              <input type="number" name="price" placeholder="Price*" value={formData.price || ''} onChange={handleInputChange} className="p-2 border rounded" required />
              <select name="type" value={formData.type} onChange={handleInputChange} className="p-2 border rounded">
                {Object.values(PropertyType).map(type => <option key={type} value={type}>{type}</option>)}
              </select>
              <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms || ''} onChange={handleInputChange} className="p-2 border rounded" min="0" />
              <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms || ''} onChange={handleInputChange} className="p-2 border rounded" min="0" />
              <input type="text" name="contactName" placeholder="Contact Name" value={formData.contactName} onChange={handleInputChange} className="p-2 border rounded" />
              <input type="tel" name="contactPhone" placeholder="Contact Phone" value={formData.contactPhone} onChange={handleInputChange} className="p-2 border rounded" />

              {/* AI Description Generator */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Description Keywords</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    placeholder="e.g., sunny, renovated kitchen, large backyard"
                    value={descriptionKeywords}
                    onChange={(e) => setDescriptionKeywords(e.target.value)}
                    className="flex-grow p-2 border rounded"
                  />
                  <button type="button" onClick={handleGenerateDescription} disabled={isGenerating || !descriptionKeywords} className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5" />
                    {isGenerating ? 'Generating...' : 'Generate'}
                  </button>
                </div>
              </div>
              <textarea name="description" placeholder="Property Description" value={formData.description} onChange={handleInputChange} className="md:col-span-2 p-2 border rounded h-28" />
            </div>
          </div>
          <div className="bg-slate-50 px-6 py-3 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700">Add Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;