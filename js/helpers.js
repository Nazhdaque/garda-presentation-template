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
