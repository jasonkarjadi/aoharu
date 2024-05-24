import { CONNECTION_STRING } from "$env/static/private";
import pg from "pg";

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const client = new pg.Client({
    connectionString: CONNECTION_STRING,
  });
  event.locals = { client };
  const response = await resolve(event);
  return response;
};
