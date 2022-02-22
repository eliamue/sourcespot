// import tags from '../components/options/data/tagoptions';
  
  export const postTags = async (tags) => {
    const res = await fetch('https://sourcespot.herokuapp.com/api/v1/resources/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(tags),
    });
  
    const body = await res.json();
    return body;
  };
  
  export const fetchAllTags = async () => {
    const res = await fetch('../components/options/data/tagdata.js');
    const allTags = await res.json();
  
    return allTags;
  };
  
  export const fetchSingleTag = async (id) => {
    const res = await fetch(
      `https://sourcespot.herokuapp.com/api/v1/tags/${id}`
    );
  
    const singleTag = await res.json();
  
    return singleTag;
  };

  export const postTagsToResource = async (tags, id) => {
    const res = await fetch(`https://sourcespot.herokuapp.com/api/v1/resources/${id}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(tags),
    });
  
    const body = await res.json();
    return body;
  };
  
  export const fetchResourceTagsByResourceId = async (id) => {
    const res = await fetch(`https://sourcespot.herokuapp.com/api/v1/resources/${id}/tags`);
    const tagsArray = await res.json();
  
    return tagsArray;
  };