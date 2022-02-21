import { useState } from "react";

export const useCreate = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [about, setAbout] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');
  const [located, setLocated] = useState('');
  const [tags, setTags] = useState('');

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handleCategory = ({ target }) => {
    setCategory(target.value);
  };

  const handleAbout = ({ target }) => {
    setAbout(target.value);
  };

  const handleWebsite = ({ target }) => {
    setWebsite(target.value);
  };

  const handleLogo = ({ target }) => {
    setLogo(target.value);
  };

  const handleLocated = ({ target }) => {
    setLocated(target.value);
  };

  const handleTags = ({ target }) => {
    setTags(target.value);
  };

  return {
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
    handleTags
  };
};
