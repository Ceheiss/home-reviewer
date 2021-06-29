import axios from "axios";

export const bookiplyReviews = axios.create({
  baseURL: "https://interview-task-api.bookiply.io/",
});
