import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  var ip = event.getClientAddress().split(":")[3];
  console.log(ip);
  return await resolve(event);
};
