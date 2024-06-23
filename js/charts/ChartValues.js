import { flipArray } from "../helpers.js";

export class ChartValues {
	constructor(data, chartColors) {
		this.data = data;
		this.chartColors = chartColors;
		this.labels = this.data.shift(0).slice(1);
		this.dataLabels = [];
		this.datasets = [];
	}

	getDataLabels = () => {
		this.data.forEach(item => this.dataLabels.push(item.shift(0)));
		return this.dataLabels;
	};

	getDatasets = () => {
		flipArray(this.data).forEach(item => {
			const dataset = [];
			item.forEach(item => dataset.push(Number.parseFloat(item, 10)));
			this.datasets.push(dataset);
		});
		return this.datasets;
	};

	getColors = () => {
		const basic = [];
		const hover = [];
		const extra = [];

		this.datasets.forEach(item => {
			item.forEach((_, i) => {
				const basicSet = [];
				const hoverSet = [];
				const extraSet = [];

				basicSet.push(this.chartColors.basic[i] ?? this.chartColors.basic[0]);
				hoverSet.push(this.chartColors.hover[i] ?? this.chartColors.hover[0]);
				extraSet.push(this.chartColors.extra[i] ?? this.chartColors.extra[0]);

				basic.push(basicSet);
				hover.push(hoverSet);
				extra.push(extraSet);
			});
		});

		return { basic, hover, extra };
	};

	getValues = () => {
		return {
			labels: this.labels,
			dataLabels: this.getDataLabels(),
			data: this.getDatasets(),
			colors: this.getColors(),
		};
	};
}
