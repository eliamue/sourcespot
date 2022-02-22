import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useCreate } from "../../hooks/createResource";
import { createResource } from "../../services/apiService";
import "../../styles/AddForm.css";
import Nav from "../Nav";
import Tags from "../options/Tags";
import States from "../options/States";

const AddForm = () => {
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
  } = useCreate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      about,
      website,
      logo,
      located,
      tags,
    };
    await createResource(data);
    history.push("/");
  };

  return (
    <>
      <Nav />
      <div className="form-container">
        <h1 className="add-header">Add Resource</h1>

        <form className="form" onSubmit={handleSubmit}>

          <div className="info-container">
            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Name of Resource: </h4>
              </div>
              <input
                name="title"
                onChange={handleTitle}
                placeholder="Company Inc."
                value={title}
                required
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Category: </h4>
              </div>
              <select
                name="category"
                className="categories"
                onChange={handleCategory}
                value={category}
                required
              >
                <option value="" defaultValue disabled>
                  Select...
                </option>
                <option value="Accessibility" label="Accessibility"></option>
                <option value="Advocacy" label="Advocacy"></option>
                <option value="Education" label="Education"></option>
                <option value="Legal" label="Legal"></option>
                <option value="Products" label="Products"></option>
                <option value="Services" label="Services"></option>
                <option value="Other" label="Other"></option>
              </select>
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Description: </h4>
              </div>
              <textarea
                name="about"
                id="about-field"
                onChange={handleAbout}
                value={about}
                required
                placeholder="Description of resource, such as services offered, symptoms addressed, location, etc."
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4 className="required">*</h4>
                <h4>Link to Resource: </h4>
              </div>
              <input
                name="website"
                onChange={handleWebsite}
                value={website}
                placeholder="http://www.tbi-resource.com"
                required
              />
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Logo/Image</h4>
              </div>
              <input
                name="logo"
                onChange={handleLogo}
                value={logo}
                placeholder="http://www.tbi-resource.com"
              />
            </label>
          </div>
      <div className="right-container">
          <div className="options-container">
            <label className="form-section">
              <div className="prompt">
                <h4>Location: </h4>
              </div>
              <div className="options">
                <States
                  value={located.value}
                  label={located.label}
                  onChange={handleLocated}
                  className="options"
                />
              </div>
            </label>

            <label className="form-section">
              <div className="prompt">
                <h4>Tags: </h4>
              </div>
              <div className="options">
                <Tags
                  value={tags.tag}
                  label={tags.tag}
                  onChange={handleTags}
                  className="options"
                />
              </div>
            </label>
          </div>
          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <div className="required">* Is Required</div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

AddForm.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  about: PropTypes.string,
  website: PropTypes.string,
  logo: PropTypes.string,
  located: PropTypes.arrayOf(PropTypes.string),
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default AddForm;
