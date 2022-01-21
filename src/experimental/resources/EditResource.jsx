import React from 'react';
import { updateResource } from '../../services/apiService';
import { useUpdate } from '../../hooks/updateResource';
import '../../styles/AddForm.css';
import { useParams, useHistory } from 'react-router-dom';
import Nav from '../Nav';

const EditResource = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    title,
    category,
    about,
    link,
    logo,
    handleTitle,
    handleCategory,
    handleAbout,
    handleLink,
    handleLogo,
  } = useUpdate(id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = {
      title,
      category,
      about,
      link,
      logo,
    };
    await updateResource(id, updated);
    history.push(`/${id}`);
  };

  return (
    <>
    <Nav />
      <h1>Add Resource</h1>
      <form className="add" onSubmit={handleSubmit}>
        <label>
          Name of Resource:
          <input
            name="title"
            onChange={handleTitle}
            placeholder="Name of company, extension, product, etc."
            value={title}
          />
        </label>
        <label>
          Category:
          <select
            name="category"
            onChange={handleCategory}
            value={category}
          >
            <option value="Accessibility" label="Accessibility"></option>
            <option value="Advocacy" label="Advocacy"></option>
            <option value="Education" label="Education"></option>
            <option value="Products" label="Products"></option>
            <option value="Other" label="Other"></option>
          </select>
        </label>

        <label>
          Description of Resource:
          <textarea
            name="about"
            onChange={handleAbout}
            value={about}
            placeholder="Description of resource with services offered and population served"
          />
        </label>

        <label>
          Link to Resource:
          <input
            name="link"
            onChange={handleLink}
            value={link}
            placeholder="Link to resource website/detail"
          />
        </label>

        <label>
          Logo or Image:
          <input
            name="Logo"
            onChange={handleLogo}
            value={logo}
            placeholder="Direct link to logo or image of resource"
          />
        </label>

        <button onClick={() => {history.push('/resources');}}>Submit</button>
      </form>
    </>
  );
};

export default EditResource;
