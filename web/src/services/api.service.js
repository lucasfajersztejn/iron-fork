import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

http.interceptors.request.use(function (config) {
  config.headers.authorization = localStorage.getItem("token");
  return config;
});

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 && location.pathname !== "/login") {
      // navigate refreshing page
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export function createUser(data) {
  return http.post("/users", data);
}

export function login(data) {
  return http.post("/login", data).then((response) => {
    localStorage.setItem("token", response.data.accessToken);

    return response;
  });
}

export function getProfile() {
  return http.get("/profile");
}

export function getRestaurants() {
  return http.get("/restaurants");
}

