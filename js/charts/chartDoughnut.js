import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const chartData = items => {
	const values = [];
	const colors = ["#2c313b"];
	const icons = [];

	items.forEach((item, i) => {
		values.push(Number.parseFloat(item.dataset.value, 10));
		colors.splice(i, colors[i], item.dataset.color);
		item.style.setProperty("--segment-color", item.dataset.color);
		item.dataset.icon && icons.push(item.dataset.icon);
		item.dataset.border && (colors[colors.length - 1] = item.dataset.border);
	});
	return { values, colors, icons };
};

const data = [];
const canvas = [];

document.querySelectorAll(".chart-doughnut").forEach((item, i) => {
	data.push(chartData(item.querySelectorAll(".chart-legend > *")));
	canvas.push(item.querySelector(".chart-doughnut canvas"));

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

	const segmentIcon = {
		id: "segmentIcon",
		afterDatasetDraw(chart) {
			const { ctx, data } = chart;
			const iconSize = 30;
			const angle = Math.PI / 180;

			chart.getDatasetMeta(0).data.forEach((datapoint, i) => {
				const icon = new Image();
				icon.src = data.datasets[0].icons[i];
				ctx.save();
				const x = chart.getDatasetMeta(0).data[i].tooltipPosition().x;
				const y = chart.getDatasetMeta(0).data[i].tooltipPosition().y;
				ctx.beginPath();
				ctx.arc(x, y, iconSize / 1.25, 0, angle * 360, false);
				ctx.fillStyle = "white";
				ctx.fill();
				ctx.drawImage(
					icon,
					x - iconSize / 2,
					y - iconSize / 2,
					iconSize,
					iconSize
				);
			});
		},
	};

	const config = {
		type: "doughnut",
		plugins: [
			ChartDataLabels,
			labelCenter,
			data[i].icons.length !== 0 && segmentIcon,
		],
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
					color: data[i].colors,
				},
			},
			maintainAspectRatio: false,
			cutout: "60%",
			layout: { padding: 60 },
			rotation: -75,
		},

		data: {
			datasets: [
				{
					data: data[i].values,
					backgroundColor: data[i].colors,
					hoverBackgroundColor: data[i].colors,
					borderColor: data[i].colors.at(-1),
					hoverBorderColor: data[i].colors.at(-1),
					borderWidth: 5,
					hoverOffset: 25,
					icons: data[i].icons,
				},
			],
		},
	};

	new Chart(canvas[i], config);
});
