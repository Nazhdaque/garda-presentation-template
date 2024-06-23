import Papa from "papaparse";

export class FetchWrapper {
	constructor(baseURL) {
		this.baseURL = baseURL;
	}

	#send = (method, endpoint, body) =>
		fetch(this.baseURL + endpoint, {
			method,
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(body),
		}).then(response => {
			if (!response.ok) {
				throw new Error("API issues.");
			}
			return response.json();
		});

	get = endpoint =>
		fetch(this.baseURL + endpoint).then(response => {
			if (!response.ok) {
				throw new Error("API issues.");
			}
			return response.json();
		});

	put = (endpoint, body) => this.#send("put", endpoint, body);
	post = (endpoint, body) => this.#send("post", endpoint, body);
	delete = (endpoint, body) => this.#send("delete", endpoint, body);
}

//---
export class AttrSetter {
	initWith = (attr, data) => {
		for (const key in data)
			document
				.querySelectorAll(`${key}`)
				.forEach(el => el.setAttribute(`${attr}`, `${data[key]}`));
	};
}

//---
export const flipArray = source => {
	const result = [];
	source.forEach(
		(_, i) =>
			i < source[i].length &&
			result.push(source.reduce((total, current) => [...total, current[i]], []))
	);
	return result;
};

//---
export class GetCustomPropsValues {
	constructor() {
		this.values = [];
	}

	getValues = props => {
		props.forEach(prop =>
			this.values.push(
				getComputedStyle(document.documentElement, null).getPropertyValue(prop)
			)
		);
		return this.values;
	};
}

//---
export class MobileDesktopStatesManager {
	constructor(onMobile, onDesktop) {
		this.onMobile = onMobile;
		this.onDesktop = onDesktop;
	}

	setState = isMobileSize =>
		isMobileSize ? this.onMobile() : this.onDesktop();

	checkState = breakpoint =>
		window.innerWidth <= breakpoint
			? this.setState(true)
			: this.setState(false);

	watchState = breakpoint =>
		window
			.matchMedia(`(max-width: ${breakpoint}px)`)
			.addEventListener("change", e => this.setState(e.matches));

	toggleStateOn = breakpoint => {
		this.checkState(breakpoint);
		this.watchState(breakpoint);
	};
}

//---
export class SizeSetter {
	constructor(prop) {
		this.prop = prop;
	}

	observer = slaves =>
		new ResizeObserver(masters =>
			masters.forEach(master => {
				switch (this.prop) {
					case "w":
						const width = master.borderBoxSize[0].inlineSize;
						slaves.forEach(slave => (slave.style.maxWidth = `${width}px`));
						break;
					case "h":
						const height = master.borderBoxSize[0].blockSize;
						slaves.forEach(slave => (slave.style.minHeight = `${height}px`));
						break;
				}
			})
		);

	initWith = relatedItems => {
		relatedItems.forEach(([m, s], i) => {
			const master = document.querySelector(`.${m}`);
			const slaves = document.querySelectorAll(`.${s}`);
			const index = i + 1;

			master && slaves
				? this.observer(slaves).observe(master)
				: console.error(
						`SizeSetter: there is no master-${index} or slave-${index}`
				  );
		});
	};
}

//---
export const parseCSV = async url => {
	const responce = await fetch(url);
	const data = await responce.text();
	return Papa.parse(data).data;
};

//---
export const trimData = (data, cut) => {
	const colHeads = data.shift(0);
	const colhead1 = colHeads.shift(0);
	const rowHeads = [];
	const cols = [];

	data.forEach(item => {
		rowHeads.push(item.shift(0));
		cols.push(item.splice(cut[0], cut[1]));
	});

	const newInnerData = cols.splice(cut[2], cut[3]);
	const newRowHeads = rowHeads.splice(cut[2], cut[3]);
	const newColHeads = [colhead1, ...colHeads.splice(cut[0], cut[1])];

	newInnerData.forEach((item, i) => item.unshift(newRowHeads[i]));
	newInnerData.unshift(newColHeads);
	return newInnerData;
};
