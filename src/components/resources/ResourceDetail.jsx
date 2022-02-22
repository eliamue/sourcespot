import React from 'react';
import '../../styles/Detail.css';
import { useParams, useHistory } from 'react-router-dom';
import { useOneResource } from '../../hooks/useOneResource';
import { deleteResource } from '../../services/apiService';


const spinner = 'https://www.indiasentinels.com/LoaderIcon.gif';

const ResourceDetail = () => {
  const { id } = useParams();
  const { loading, resource } = useOneResource(id);
  const history = useHistory();
  const {
    title,
    category,
    about,
    website,
    located,
    logo,
    tags
  } = resource;

  function handleDelete(id) {
    deleteResource(id);
    history.push('/');
  }

  function handleEdit() {
    history.push(`/edit/${id}`);
  }

  if (loading) return <img src={spinner} alt="Loading" />;

  return (
    <div className="details">
      <h1 aria-label="src-name">{title}</h1>
      <div className="location-disc">{located}</div>
      <h3>Category: {category}</h3>
        <a href={website}>
          <img src={logo} alt="logo" />
        </a>
      <h4 className="description">{about}</h4>
    <p className="tags">{tags}</p>
      <section>
        <button name="delete-btn" onClick={handleDelete}>Delete Resource</button>
        <button onClick={handleEdit}>Edit Resource</button>
      </section>
    </div>
  );
};

export default ResourceDetail;
