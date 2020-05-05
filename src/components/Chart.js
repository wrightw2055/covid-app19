import React, { useState, useEffect } from 'react';
import { Bar} from 'react-chartjs-2';
import { chartData } from '../api/api';
import './Chart.css'

const Chart = (props) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const info = await chartData();
			if (info) {const countrySearch =  info.Countries.find((Country)=> Country.Country.toLowerCase()=== props.search.toLowerCase())
			console.log(countrySearch)
			setData(countrySearch);
			}
		})();
	}, [props.search]);

	if (!data) {
		return <p>searching...</p>;
	}
	
	const lineChart = (
		<Bar
			data={{
				label: data.Country,
				
				datasets: [
					{
						data: [data.TotalConfirmed],
						label: 'Infected',
						borderColor: '#F0E100',
						fill: true,
					},
					{
						data: [data.TotalDeaths],
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(240, 52, 52, 0.8)',
						fill: true,
					},
					{
						data: [data.TotalRecovered],
						label: 'Recover',
						borderColor: 'blue',
						backgroundColor: 'blue',
						fill: true,
					},

				],
				
			}}
		/>
	);

	

	return <>
	<h1 className= 'country'>{data.Country}</h1>
	 {lineChart}
	
	</>;
};

export default Chart;
