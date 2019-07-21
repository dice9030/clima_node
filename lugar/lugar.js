const axios = require('axios');



const getLugarLatLng = async(ciudad) =>{
	const encodeUrl = encodeURI(ciudad)

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
	  headers: {'X-RapidAPI-Key': 'tukey'}
	});

	const resp = await instance.get()
		

		if (resp.data.Results.length === 0){
			throw new Error(`Error`)
		}

		const data = resp.data.Results[0];
		const direccion = data.name;
		const lat = data.lat;
		const lng = data.lon;

	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}