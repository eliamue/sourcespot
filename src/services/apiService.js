// const URL = "https://sourcespot.herokuapp.com/api/v1/resources";
import request from 'superagent';

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
      logo: resource.logo
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
      logo
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      website,
      logo
    };
  } catch (error) {
    console.error(error.message);
  }
};

// export async function createResource(data) {
//   const { body } = await request
//   .post('https://sourcespot.herokuapp.com/api/v1/resources')
//   .send(data);

//   return body;
// }

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
      logo
    } = await res.json();

    return {
      id,
      title,
      category,
      about,
      website,
      logo
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

export async function deleteResource(id) {
    const { body } = await request
    .delete(`https://sourcespot.herokuapp.com/api/v1/resources/${id}`);

    return body;
}