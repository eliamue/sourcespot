import { useEffect, useState } from "react";
import { updateResource } from "../services/apiService";

export const useUpdate = (id) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [link, setLink] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    updateResource(id)
      .then((resource) => {
        setTitle(resource.title);
        setCategory(resource.category);
        setAbout(resource.about);
        setLink(resource.link);
        setLogo(resource.Logo);
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

  const handleLink = ({ target }) => {
    setLink(target.value);
  };

  const handleLogo = ({ target }) => {
    setLogo(target.value);
  };

  return {
    loading,
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
  };
};
