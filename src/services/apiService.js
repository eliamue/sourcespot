// const URL = "https://sourcespot.herokuapp.com/api/v1/resources";

export const fetchAllResources = async () => {
  try {
    const res = await fetch(
      'https://sourcespot.herokuapp.com/api/v1/resources'
    );

    const resources = await res.json();
    return resources.map((resource) => ({
      id: resource.id,
      title: resource.title,
      category: resource.category,
      about: resource.about,
      website: resource.website,
      logo: resource.logo,
      located: resource.located,
      tags: resource.tags
    }));
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchOneResource = async (resourceId) => {
  try {
    const res = await fetch(
      `https://sourcespot.herokuapp.com/api/v1/resources/${resourceId}`
    );
    const {
      id,
      title,
      category,
      about,
      website,
      logo,
      located,
      tags
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      website,
      logo,
      located,
      tags
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const createResource = async (data) => {
  try {
    const res = await fetch(
      'https://sourcespot.herokuapp.com/api/v1/resources',
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
      website,
      logo,
      located,
      tags
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      website,
      logo,
      located,
      tags
    };
  } catch (error) {
    console.error(error.message);
  }
};

export const updateResource = async (id, updatedResource) => {
  const res = await fetch(
    `https://sourcespot.herokuapp.com/api/v1/resources/${id}`,
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
  return fetch(`https://sourcespot.herokuapp.com/api/v1/resources/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};