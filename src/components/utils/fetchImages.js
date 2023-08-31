import { createClient } from "pexels";

const client = createClient(
  "oc6Fo96QjXj8NyhPQsh1zzkp6HT7HfgHL91jjKGM7MVbQp1z0iY2eTJz"
);
const query = "sushi";
const orientation = "portrait";
const page = Math.floor(Math.random() * 5);

export function getImages(number = 0) {
  // Get sushi images from Api Pexels
  return client.photos
    .search({ orientation, query, page, per_page: 4 + number })
    .then((json) => {
      return [...json.photos];
    })
    .catch((e) => {
      console.log("Oops, something went wrong. Check the following error.");
      console.error(e);
    });
}
