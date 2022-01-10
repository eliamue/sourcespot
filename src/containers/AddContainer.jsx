import React from 'react';
import { useParams } from 'react-router';
import AddForm from '../components/AddForm';
import { useOneResource } from '../hooks/useOneResource';
import Header from '../components/Header';

const spinner =
  'https://www.indiasentinels.com/LoaderIcon.gif';

const AddContainer = () => {
  const { id } = useParams();
  const { loading } = useOneResource(id);

  if(loading) return <img src={spinner} alt="Loading" />;

  return (
    <>
      <Header />
      <AddForm />
    </>
  );
};

export default AddContainer;
