import React from 'react';
import Resource from './Resource';
import { useAllResources } from '../../hooks/useAllResources';
import '../../styles/Resources.css';

const spinner =
  'https://www.indiasentinels.com/LoaderIcon.gif';

const Resources = () => {
  const { loading, resources } = useAllResources();
  if(loading) return <img src={spinner} alt="Loading" />;
  
  return (
    <ul aria-label="resources" className="resource-list">
      {resources.map((resource) => (
        <li key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
  );
};

export default Resources;
