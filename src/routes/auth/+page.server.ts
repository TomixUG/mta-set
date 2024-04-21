// routes/login/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";
import constants from "$lib/constants";

export const actions: Actions = {
  default: async ({ request, locals, cookies, url }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
    console.log(password);
    // check the login details
    if (email == constants.email && password == constants.password) {
      console.log("login success");
      cookies.set(constants.cookieName, constants.token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
        secure: false,
      });
      redirect(302, "/");
    } else {
      console.log("login failed");
      return fail(400, {
        message: "Zadali jste špatný email nebo heslo!",
      });
    }
  },
};

export const load: PageServerLoad = async ({ cookies }) => {
  if (cookies.get(constants.cookieName) === constants.token) {
    console.log("redirecting to /");
    redirect(302, "/");
  }
};
