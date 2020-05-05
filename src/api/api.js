import axios from 'axios';

const url = 'https://api.covid19api.com/';

export const fetchData = async () => {
	try {
		const { data: countriesRoute, countryRoute } = await axios.get(url);
		const modifiedData = {
			countriesRoute,
			countryRoute,
		};

		console.log(modifiedData);

		return modifiedData;
	} catch (error) {}
};

export const chartData = async () => {
	try {
		const { data } = await axios.get('https://api.covid19api.com/summary');

		return data;
	} catch (error) {}
};


export const searchData = async () => {
	try {
		const { data } = await axios.get('https://api.covid19api.com/summary');

		return data;
	} catch (error) {}
};