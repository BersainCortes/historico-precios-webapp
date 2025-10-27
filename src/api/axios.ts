import axios from "axios";

const base_url = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "https://historico-precios-api.onrender.com",
});

export default base_url;
