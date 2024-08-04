import { client } from "@/sanity/lib/client";

export const fetchTrendingBlogs = async () => {
  try {
    const data = await client.fetch(`*[_type == 'trending']`);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchBlogs = async () => {
  try {
    const data = await client.fetch(`*[_type == 'blogs']`);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};




export const fetchBlogBySlug = async (slug) => {
  try {
    const data = await client.fetch(`*[_type == 'blogs' && slug.current == $slug][0]`, { slug });
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



export const fetchTrendingBlogBySlug = async (slug) => {
  try {
    const query = `*[_type == 'trending' && slug.current == $slug][0]`;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
};