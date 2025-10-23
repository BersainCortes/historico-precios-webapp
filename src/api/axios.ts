import axios from "axios";

const base_url = axios.create({ baseURL: import.meta.env.API_URL_BASE })

export default base_url