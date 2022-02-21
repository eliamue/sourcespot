import React from 'react';
import { updateResource } from '../services/apiService';
import { useUpdate } from '../hooks/updateResource';
import '../../../styles/AddForm.css';
import { useParams, useHistory } from 'react-router-dom';
import Nav from '../Nav';

const EditResource = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    title,
    category,
    about,
    website,
    logo,
    located,
    tags,
    handleTitle,
    handleCategory,
    handleAbout,
    handleWebsite,
    handleLogo,
    handleLocated,
    handleTags,
  } = useUpdate(id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = {
      title,
      category,
      about,
      website,
      logo,
      located,
      tags
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
            name="website"
            onChange={handleWebsite}
            value={website}
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
        <label>
          Location:
          <input
            name="located"
            onChange={handleLocated}
            placeholder="If location-specific, state abbreviation. Leave empty if not location-specific."
            value={located}
          />
        </label>
        <label>
          Tags:
          <input
            name="tags"
            onChange={handleTags}
            placeholder="List of appropriate tags, separated by comma"
            value={tags}
          />
        </label>

        <button onClick={() => {history.push('/resources');}}>Submit</button>
      </form>
    </>
  );
};

export default EditResource;
