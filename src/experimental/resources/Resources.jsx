import React from 'react';
import Resource from './Resource';
import { useAllResources } from '../hooks/useAllResources';
import '../../styles/List.css';

const spinner =
  'https://www.indiasentinels.com/LoaderIcon.gif';

const Resources = ({ filteredResources, searchTerm }) => {
  const { loading, resources } = useAllResources();

  if(loading) return <img src={spinner} alt="Loading" />;

  const resourcesToDisplay = filteredResources.length ? filteredResources : resources;

  if (searchTerm && !filteredResources.length) return <h2>No resources found with this search term, womp womp</h2>;

  return (
    <div className="container">
    <ul aria-label="resources" className="results">
      {resourcesToDisplay.map((resource) => (
        <li className="searchresult" key={resource.id}>
          <Resource {...resource} />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default Resources;
