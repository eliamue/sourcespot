const URL = "https://tbi-resources.herokuapp.com/api/v1/resources";

export const fetchAllResources = async () => {
  try {
    const res = await fetch(`${URL}`);

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

export const fetchOneResource = async (resourceId) => {
  try {
    const res = await fetch(
      `${URL}/${resourceId}`
    );
    const {
      id,
      title,
      category,
      about,
      link,
      logo,
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      link,
      logo,
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const createResource = async (data) => {
  try {
    const res = await fetch(
      `${URL}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );

    const {
      id,
      title,
      category,
      about,
      link,
      logo,
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      link,
      logo,
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const updateResource = async (id, updatedResource) => {
  const res = await fetch(
    `${URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedResource),
    }
  );
  return res.json();
};

export const deleteResource = (id) => {
  return fetch(
    `${URL}/${id}`,
    { method: "DELETE" }
  ).then((res) => res.json());
};