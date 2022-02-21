import React, { useEffect, useState } from 'react';

export const useCategoryFilter = () => {
const [selectedCategories, setSelectedCategories] = useState([]);

useEffect(() => {
  const filteredList = resources.filter(
    (prod) =>
      (accessibilitySelected && resource.category === "accessibility") ||
      (productsSelected && resource.category === "products") ||
      (advocacySelected && resource.category === "advocacy") ||
      (productsSelected && resource.category === "products")
  );
  setSelectedCategories(filteredList);
}, [resources, accessibilitySelected, productsSelected]);



<div className="row center">
  {selectedCategories.map((resource) => (
    <Resource key={resource.id} resource={resource} />
  ))}
</div>;
};
