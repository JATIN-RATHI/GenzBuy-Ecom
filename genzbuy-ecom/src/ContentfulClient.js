import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: import.meta.env.VITE_space,         // Replace with your Space ID
  accessToken: import.meta.env.VITE_AccessToken, // Replace with your Access Token
});