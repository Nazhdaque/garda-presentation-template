import Chart from "chart.js/auto";
import { getChartData } from "./getChartData.js";

const getChart = async () => {
	const lineChart = await getChartData("demo-data.csv", [0, 2, 0, 7]);

	const data = {
		labels: lineChart.dataLabels,
		datasets: [
			{
				label: lineChart.labels[0],
				data: lineChart.data[0],
				borderColor: lineChart.colors.hover[0],
				fill: {
					target: true,
					above: lineChart.colors.extra[0],
				},
				tension: 0.25,
				pointStyle: "circle",
				backgroundColor: lineChart.colors.hover[1],
				pointRadius: 5,
				pointHoverRadius: 15,
			},
			{
				label: lineChart.labels[1],
				data: lineChart.data[1],
				borderColor: lineChart.colors.hover[2],
				borderDash: [6, 2],
				fill: {
					target: true,
					above: lineChart.colors.extra[2],
				},
				tension: 0.25,
				pointStyle: "circle",
				backgroundColor: lineChart.colors.hover[3],
				pointRadius: 5,
				pointHoverRadius: 15,
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: { beginAtZero: true },
		},
	};

	const config = {
		type: "line",
		data: data,
		options: options,
	};

	document
		.querySelectorAll(".chart-line")
		.forEach(chart => new Chart(chart, config));
};
getChart();
