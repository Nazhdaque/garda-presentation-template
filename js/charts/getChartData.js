import {
	GetCustomPropsValues,
	parseCSV,
	trimData,
	flipArray,
} from "../helpers.js";
import { ChartValues } from "./ChartValues.js";

export const getChartData = async (url = "", trim = null, flip = null) => {
	let data = await parseCSV(url);
	flip === "flip" && (data = flipArray(data));
	trim && (data = trimData(data, trim));
	const values = new ChartValues(data, chartColors);
	return values.getValues();
};

const getColors = new GetCustomPropsValues(document.querySelector(".chart"));
const clrValues = getColors.getValues([
	"--color-1",
	"--color-2",
	"--color-3",
	"--color-4",
	"--color-5",
	"--color-6",
	"--color-7",
]);

const chartColors = {
	basic: [
		`hsl(${clrValues[0]}, 1)`,
		`hsl(${clrValues[1]}, 1)`,
		`hsl(${clrValues[3]}, 1)`,
		`hsl(${clrValues[2]}, 1)`,
		`hsl(${clrValues[4]}, 1)`,
		`hsl(${clrValues[5]}, 1)`,
		`hsl(${clrValues[6]}, 1)`,
		`hsl(${clrValues[7]}, 1)`,
	],
	hover: [
		`hsl(${clrValues[0]}, 1)`,
		`hsl(${clrValues[1]}, 1)`,
		`hsl(${clrValues[3]}, 1)`,
		`hsl(${clrValues[2]}, 1)`,
		`hsl(${clrValues[4]}, 1)`,
		`hsl(${clrValues[5]}, 1)`,
		`hsl(${clrValues[6]}, 1)`,
		`hsl(${clrValues[7]}, 1)`,
	],
	extra: [
		`hsl(${clrValues[0]}, 0.1)`,
		`hsl(${clrValues[1]}, 0.1)`,
		`hsl(${clrValues[3]}, 0.1)`,
		`hsl(${clrValues[2]}, 0.1)`,
		`hsl(${clrValues[4]}, 0.1)`,
		`hsl(${clrValues[5]}, 0.1)`,
		`hsl(${clrValues[6]}, 0.1)`,
		`hsl(${clrValues[7]}, 0.1)`,
	],
};
