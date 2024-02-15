import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const authToken = <YOUR_AUTH_TOKEN>;
    // if (authToken) {
    //   config.headers.Authorization = `Bearer ${authToken}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response ? error.response.status : null;
    // Streamline error handling
    if (status === 401) {
      // Handle unauthorized access
      console.log("Unauthorized access");
    } else if (status === 404) {
      // Handle not found errors
      console.log("Post not found");
    } else {
      // Handle other errors
      console.error("An error occurred:", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
