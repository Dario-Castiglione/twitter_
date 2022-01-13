const BASE_URL = "https://my-twitter-data.herokuapp.com";

const http = (resource) => fetch(BASE_URL + resource)
.then(response => response.json());

  

export { http };
