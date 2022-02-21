import React, { useEffect, useState } from 'react';
import Resources from '../../components/resources/Resources';
import { fetchManyResources } from '../../services/apiService';
import Nav from '../../components/Nav';

const spinner = 'https://www.indiasentinels.com/LoaderIcon.gif';

const ResourcesContainer = () => {
  const [loading, setLoading] = useState(true);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const loadResources = async () => {
      const resourcesFromApi = await fetchManyResources();
      setResources(resourcesFromApi);
      setLoading(false);
    };
    loadResources();
  });
  

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
    <Nav />
      <Resources 
        resources={resources}
      />
    </>
  );
};

export default ResourcesContainer;
