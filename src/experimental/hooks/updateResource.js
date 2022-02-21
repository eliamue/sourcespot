import { useEffect, useState } from "react";
import { updateResource } from "../services/apiService";

export const useUpdate = (id) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState("");
  const [located, setLocated] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    updateResource(id)
      .then((resource) => {
        setTitle(resource.title);
        setCategory(resource.category);
        setAbout(resource.about);
        setWebsite(resource.website);
        setLogo(resource.logo);
        setLocated(resource.located);
        setTags(resource.tags);
      })
      .finally(() => setLoading(false));
  }, [id]);

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
    loading,
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
