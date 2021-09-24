class Series {
	x: number[] | string[] = [];
	y: number[] = [];
}


export class Chart {
	series: Series[] = [];
}


function parseChartDescriptions(data: JSONValue) {
	const valid = (
		Array.isArray(data) &&
		data.length === 2 &&
		Array.isArray(data[0]) &&
		data[0].every(function(item) {
			return typeof item === "number" || typeof item === "string";
		}) &&
		Array.isArray(data[1]) &&
		data[1].every(function(item) {
			return typeof item === "number";
		}));

	if (valid) {
		const series = new Series();
		series.x = (data[0] as number[] | string[]).slice();
		series.y = (data[1] as number[]).slice();

		const chart = new Chart();
		chart.series = [series];

		return [chart];
	}

	return null;
}


export default parseChartDescriptions;
