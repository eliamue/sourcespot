import { useState } from "react";

export const useCreate = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [link, setLink] = useState("");
  const [logo, setLogo] = useState("");

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
