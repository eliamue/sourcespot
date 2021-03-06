import React from 'react';
import { useParams } from 'react-router';
import Nav from '../../components/Nav';
import ResourceDetail from '../components/resources/ResourceDetail';
import { useOneResource } from '../../hooks/useOneResource';

const spinner =
  'https://www.indiasentinels.com/LoaderIcon.gif';

const DetailContainer = () => {
  const { id } = useParams();
  const { loading, resource } = useOneResource(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Nav />
      <ResourceDetail {...resource} />
    </>
  );
};

export default DetailContainer;
