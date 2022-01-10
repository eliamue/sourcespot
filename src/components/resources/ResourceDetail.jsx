import React from 'react';
import styles from '../styles/Detail.css';
import { useParams, useHistory } from 'react-router-dom';
import { useOneResource } from '../../hooks/useOneResource';
import { deleteResource } from '../../services/apiService';


const spinner = 'https://i.redd.it/o6m7b0l6h6pz.gif';

// const always = '*Available 24/7';

const ResourceDetail = () => {
  const { id } = useParams();
  const { loading, resource } = useOneResource(id);
  const history = useHistory();
  const {
    src_name,
    category,
    src_description,
    st_address,
    city,
    us_state,
    zip,
    phone,
    text_num,
    website,
    email,
    is_24_7,
  } = resource;

  function handleDelete() {
    deleteResource(id);
    history.push('/');
  }

  function handleEdit() {
    history.push(`/edit/${id}`);
  }

  if (loading) return <img src={spinner} alt="Loading" />;

  return (
    <div className={styles.srcdeets}>
      <h1 aria-label="src-name">{src_name}</h1>

      <h3>Category: {category}</h3>

      <h4 className={styles.desc}>{src_description}</h4>

      <section className={styles.location}>
        <h3>Location</h3>
        <p>{st_address}</p>
        <p>
          {city}, {us_state} {zip}
        </p>
      </section>

      <section className={styles.contact}>
        <h3>Contact</h3>
        <p>Phone number: {phone}</p>
        <p>Text number: {text_num}</p>
        <p>
          <a href="true" src={website} alt={src_name} className={styles.website}>
            {website}
          </a>
        </p>
        <p>{email}</p>
        <p>Available 24/7? {is_24_7}</p>
      </section>

      <section>
        <button name="delete-btn" role="button" onClick={handleDelete}>Delete Resource</button>
        <button onClick={handleEdit}>Edit Resource</button>
      </section>
    </div>
  );
};

export default ResourceDetail;
