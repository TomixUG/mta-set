import constants from "$lib/constants";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies, route }) => {
  if (
    cookies.get(constants.cookieName) !== constants.token &&
    route.id !== "/auth"
  ) {
    console.log("redirecting to /auth");
    redirect(302, "/auth");
  }

  //   else if (
  //     route.id === "/auth" &&
  //     cookies.get(constants.cookieName) === constants.token
  //   ) {
  //     console.log("redirecting to /");
  //     redirect(302, "/");
  //   }
};
