const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')

const argv = require('yargs').options({
	direccion:{
		alias:'d',
		desc:'Direccion del clima',
		demand: true
	}
}).argv





//clima.getclima('40.750000','-74.000000').then(console.log).catch(console.log);

const getInfo = async (direccion) => {

	try{
		const coords = await lugar.getLugarLatLng( direccion);
		const temperatura = await clima.getclima(coords.lat,coords.lng )
		return `Clima es ${coords.direccion} es de ${temperatura}`;
	}catch (e){
		return `No se encontro la temperatura de ${direccion}`; 
	}
}

getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log)
//console.log(argv.direccion)
//console.log(argv.direccion)

