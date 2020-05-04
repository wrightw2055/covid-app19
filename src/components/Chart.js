import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { chartData } from '../api/api';

const Chart = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const info = await chartData();
			setData(info);
		})();
	}, []);

	if (data === null) {
		return null;
	}

	const formattedDate = `${new Date(data.Date).toDateString()}`;
	// const moreDate = data.map(({ date }) => date)
	
	const lineChart = (
		<Line
			data={{
				labels: [formattedDate],
				datasets: [
					{
						data: [data.Global.TotalConfirmed],
						label: 'Infected',
						borderColor: '#F0E100',
						fill: true,
					},
					{
						data: [data.Global.TotalDeaths],
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(240, 52, 52, 0.8)',
						fill: true,
					},
					{
						data: [data.Global.TotalRecovered],
						label: 'Recover',
						borderColor: 'blue',
						backgroundColor: 'blue',
						fill: true,
					},
				],
			}}
		/>
	);

	

	return <>{lineChart}
	
	</>;
};

export default Chart;
