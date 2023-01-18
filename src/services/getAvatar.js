export default function getAvatar() {
  const API_URL = "https://randomuser.me/api/?results=1";

  return fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response;
      const { email, phone, location, picture } = results[0];
      const city = location.city;
      const url = picture.medium;

      return { email, phone, url, city };
    });
}
