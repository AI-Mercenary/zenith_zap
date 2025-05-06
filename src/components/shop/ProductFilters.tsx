
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { X } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const ProductFilters = ({ onFilterChange }: FiltersProps) => {
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [categories, setCategories] = useState<string[]>([]);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [useCases, setUseCases] = useState<string[]>([]);
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    updateFilters({ priceRange: values });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    let newCategories;
    if (checked) {
      newCategories = [...categories, category];
    } else {
      newCategories = categories.filter(c => c !== category);
    }
    setCategories(newCategories);
    updateFilters({ categories: newCategories });
  };

  const handleFlavorChange = (flavor: string, checked: boolean) => {
    let newFlavors;
    if (checked) {
      newFlavors = [...flavors, flavor];
    } else {
      newFlavors = flavors.filter(f => f !== flavor);
    }
    setFlavors(newFlavors);
    updateFilters({ flavors: newFlavors });
  };

  const handleUseCaseChange = (useCase: string, checked: boolean) => {
    let newUseCases;
    if (checked) {
      newUseCases = [...useCases, useCase];
    } else {
      newUseCases = useCases.filter(u => u !== useCase);
    }
    setUseCases(newUseCases);
    updateFilters({ useCases: newUseCases });
  };

  const updateFilters = (updatedFilters: any) => {
    onFilterChange({
      priceRange: updatedFilters.priceRange !== undefined ? updatedFilters.priceRange : priceRange,
      categories: updatedFilters.categories !== undefined ? updatedFilters.categories : categories,
      flavors: updatedFilters.flavors !== undefined ? updatedFilters.flavors : flavors,
      useCases: updatedFilters.useCases !== undefined ? updatedFilters.useCases : useCases,
    });
  };

  const resetFilters = () => {
    setPriceRange([0, 10]);
    setCategories([]);
    setFlavors([]);
    setUseCases([]);
    onFilterChange({
      priceRange: [0, 10],
      categories: [],
      flavors: [],
      useCases: [],
    });
  };

  const categoryOptions = [
    { id: 'proton', label: 'Proton' },
    { id: 'neutron', label: 'Neutron' },
    { id: 'electron', label: 'Electron' },
  ];

  const flavorOptions = [
    { id: 'citrus', label: 'Citrus' },
    { id: 'berry', label: 'Berry' },
    { id: 'tropical', label: 'Tropical' },
    { id: 'watermelon', label: 'Watermelon' },
    { id: 'grape', label: 'Grape' },
  ];

  const useCaseOptions = [
    { id: 'pre-workout', label: 'Pre-Workout' },
    { id: 'during-workout', label: 'During Workout' },
    { id: 'recovery', label: 'Recovery' },
  ];

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle>Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            <X className="h-4 w-4 mr-1" /> Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="series">
            <AccordionTrigger className="py-2">Product Series</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {categoryOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${option.id}`} 
                      checked={categories.includes(option.id)}
                      onCheckedChange={(checked) => handleCategoryChange(option.id, checked === true)}
                    />
                    <Label htmlFor={`category-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="price">
            <AccordionTrigger className="py-2">Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-1">
                <Slider 
                  value={priceRange} 
                  min={0} 
                  max={10} 
                  step={0.5}
                  onValueChange={handlePriceChange}
                  className="my-6"
                />
                <div className="flex justify-between">
                  <span>${priceRange[0].toFixed(2)}</span>
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="flavors">
            <AccordionTrigger className="py-2">Flavors</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {flavorOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`flavor-${option.id}`} 
                      checked={flavors.includes(option.id)}
                      onCheckedChange={(checked) => handleFlavorChange(option.id, checked === true)}
                    />
                    <Label htmlFor={`flavor-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="use-case">
            <AccordionTrigger className="py-2">Use Case</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {useCaseOptions.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`useCase-${option.id}`} 
                      checked={useCases.includes(option.id)}
                      onCheckedChange={(checked) => handleUseCaseChange(option.id, checked === true)}
                    />
                    <Label htmlFor={`useCase-${option.id}`}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ProductFilters;
