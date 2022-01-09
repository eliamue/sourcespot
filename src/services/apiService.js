export const fetchAllResources = async () => {
  try {
    const res = await fetch(
      "https://tbi-resources.herokuapp.com/api/v1/resources"
    );

    const resources = await res.json();
    return resources.map((resource) => ({
      id: resource.id,
      title: resource.title,
      category: resource.category,
      about: resource.about,
      link: resource.link,
      logo: resource.logo,
    }));
  } catch (error) {
    console.error(error.message);
  }
};
