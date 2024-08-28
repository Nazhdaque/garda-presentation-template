import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FetchWrapper, getElements } from "../helpers.js";
import { chartSection, li } from "./chart-html.js";
import { render } from "lit-html";

let palette = [
	"#0bbafa",
	"#b657ff",
	"#0081cc",
	"#863dc6",
	"#b7d8fe",
	"#dfb5ff",
	"#f9b232",
	"#1cbab3",
	"#a4897a",
];

const mobile = 576;

const getPairs = (items, values) => {
	const pairs = {};
	if (items) for (const [i, key] of items.entries()) pairs[key] = values[i];
	return pairs;
};

const sortPairs = items => {
	const pairs = new Map();
	Object.keys(items)
		.sort((a, b) => items[a] - items[b])
		.forEach(key => pairs.set(key, items[key]));
	return pairs;
};

const sortDescending = json => {
	const values = [];
	const sortedJson = [];
	json.forEach(dataset => {
		const { title, values: vals, legends, border, icons } = dataset;
		const sortedDataset = {
			title,
			values: [],
			legends: [],
			border,
			icons,
		};

		for (const [legend, value] of sortPairs(getPairs(legends, vals))) {
			sortedDataset.values.unshift(Number.parseInt(value, 10));
			sortedDataset.legends.unshift(legend);
		}

		for (const [icon] of sortPairs(getPairs(icons, vals)))
			sortedDataset.icons.unshift(icon);

		sortedJson.push(sortedDataset);
		values.push(sortedDataset.values);
	});

	return {
		sortedJson,
		values,
	};
};

const getSections = sortedData => {
	const legends = [];
	const sections = [];
	const colors = [...palette];

	sortedData.sortedJson.forEach((entry, index) => {
		const { title, values, legends: descrs, border, icons } = entry;
		const chartLegends = [];
		values.forEach((value, i) => {
			value === sortedData.values[index][i - 1] &&
				palette.splice(i, palette[i], palette[i - 1]);
			chartLegends.push(li(palette, value, descrs[i], border, icons, i));
		});
		legends.push(chartLegends);
		sections.push(chartSection(title, legends[index], index));
		palette = [...colors];
	});

	return sections;
};

const chartData = items => {
	const values = [];
	const colors = ["#ffffff"];
	const icons = [];

	items.forEach((item, i) => {
		const { value, color, border, icon } = item.dataset;
		values.push(Number.parseFloat(value, 10));
		colors.splice(i, colors[i], color);
		item.style.setProperty("--segment-color", color);
		icon && icons.push(icon);
		border && (colors[colors.length - 1] = border);
	});
	return { values, colors, icons };
};

const API = new FetchWrapper("data/");
const getChartData = async () => {
	const json = await API.get("charts-data.json");
	const sortedData = sortDescending(json);
	const sections = getSections(sortedData);

	const containers = getElements([".__slide-12", ".__slide-13", ".__slide-14"]);
	// first two charts render in the ssecond container
	// render(sections.splice(0, 2), containers[1]);
	// render(sections[0], containers[0]);
	sections.forEach((section, i) => render(section, containers[i]));

	const data = [];
	const canvas = [];

	document.querySelectorAll(".chart").forEach((item, i) => {
		data.push(chartData(item.querySelectorAll(".chart-legend > *")));
		canvas.push(item.querySelector(".chart canvas"));

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
					ctx.font = `800 ${
						window.outerWidth <= mobile ? 2.5 + "em" : 3.5 + "em"
					} Proxima Nova`;
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
				const iconSize = window.outerWidth <= mobile ? chart.width / 18 : 30;
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
						font: ctx => {
							return {
								family: "Proxima Nova",
								size: window.outerWidth <= mobile ? ctx.chart.width / 24 : 28,
								weight: window.outerWidth <= mobile ? "normal" : "bold",
							};
						},
						color: data[i].colors,
					},
				},
				maintainAspectRatio: false,
				cutout: "60%",
				layout: { padding: 60 },
				rotation: -50,
			},

			data: {
				datasets: [
					{
						data: data[i].values,
						backgroundColor: data[i].colors,
						hoverBackgroundColor: data[i].colors,
						borderColor: data[i].colors.at(-1),
						hoverBorderColor: data[i].colors.at(-1),
						borderWidth: window.outerWidth <= mobile ? 2 : 5,
						hoverOffset: 25,
						icons: data[i].icons,
					},
				],
			},
		};

		new Chart(canvas[i], config);
	});
};

getChartData();
