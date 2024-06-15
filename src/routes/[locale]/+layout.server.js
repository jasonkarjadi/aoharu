import { redirect } from "@sveltejs/kit";

/** @type {import("@sveltejs/kit").ServerLoad} */
export const load = ({ params }) => {
  if (!["jpn", "eng"].includes(params.locale)) {
    redirect(307, "/jpn");
  }
};
