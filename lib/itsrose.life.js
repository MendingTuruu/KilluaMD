import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.itsrose.life",
	params: {
		apikey: process.env.ITSROSE_API_KEY,
	},
});
instance.interceptors.request.use(
	(config) => {
		config.params = {
			...config.params,
		};
		return config;
	},
	(err) => err
);
instance.interceptors.response.use(
	({ data }) => data,
	(err) => err.response?.data || err
);
export default instance;
