import React, { useEffect, useState } from 'react';
import Resources from '../resources/Resources';
import Search from '../resources/Search';
import { getResourcees } from '../services/ResourceApi';

const ResourceCatalog = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadResources = async () => {
      const resourcesFromApi = await getResourcees();
      setResources(resourcesFromApi);
      setLoading(false);
    };
    loadResources();
  });

  useEffect(() => {
    setFilteredResources(
      resources.filter((resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = ({ target }) => {
    setSearchTerm(target.value);
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <Resources
        resources={resources}
        searchTerm={searchTerm}
        filteredResources={filteredResources}
      />
    </>
  );
};

export default ResourceCatalog;
