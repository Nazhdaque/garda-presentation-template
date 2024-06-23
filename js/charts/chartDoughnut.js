import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const chartData = items => {
	const values = [];
	const colors = ["#2c313b"];
	items.forEach((item, i) => {
		values.push(Number.parseFloat(item.dataset.value, 10));
		colors.splice(i, colors[i], item.dataset.color);
		item.style.setProperty("--segment-color", item.dataset.color);
	});

	return {
		values: values,
		colors: colors,
	};
};
const data = chartData(document.querySelectorAll(".chart-legend > *"));

const getChart = () => {
	const labelCenter = {
		id: "labelCenter",
		beforeDatasetsDraw(chart) {
			const { ctx } = chart;
			ctx.save();
			const xAxis = chart.getDatasetMeta(0).data[0].x;
			const yAxis = chart.getDatasetMeta(0).data[0].y;
			if (chart._active.length > 0) {
				const numLabel =
					chart.config.data.datasets[chart._active[0].datasetIndex].data[
						chart._active[0].index
					];
				const clr =
					chart.config.data.datasets[chart._active[0].datasetIndex]
						.hoverBackgroundColor[chart._active[0].index];
				ctx.font = "800 3.5em Proxima Nova";
				ctx.fillStyle = clr;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(`${numLabel}`, xAxis, yAxis);
			}
			ctx.restore();
		},
	};

	const config = {
		type: "doughnut",
		plugins: [ChartDataLabels, labelCenter],
		options: {
			plugins: {
				tooltip: { enabled: false },
				legend: { display: false },
				colors: { enabled: true },
				datalabels: {
					anchor: "end",
					align: "end",

					formatter: (value, ctx) => {
						const datapoints = ctx.chart.data.datasets[0].data;
						const total = datapoints.reduce(
							(total, datapoint) => total + datapoint,
							0
						);
						const percentage = (value / total) * 100;
						return percentage.toFixed(0) + "%";
					},
					font: {
						family: "Proxima Nova",
						size: 28,
						weight: "bold",
					},
					color: data.colors,
				},
			},
			maintainAspectRatio: false,
			cutout: "60%",
			layout: { padding: 50 },
			rotation: -65,
		},

		data: {
			datasets: [
				{
					data: data.values,
					backgroundColor: data.colors,
					hoverBackgroundColor: data.colors,
					borderColor: data.colors.at(-1),
					borderWidth: 5,
					hoverOffset: 25,
				},
			],
		},
	};

	document
		.querySelectorAll(".chart-doughnut")
		.forEach(ctx => new Chart(ctx, config));
};

getChart();
