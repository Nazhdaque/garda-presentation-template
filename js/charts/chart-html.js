import { html } from "lit-html";

export const chartSection = (title, legends, index) => html`
	<section class="chart width-x xl-gaf-row">
		<figure class="chart-box">
			<canvas></canvas>
		</figure>

		<div class="${index % 2 ? "order-down xl-order-0" : null}">
			<h2 class="fs-xl fw-eb txt-gradient chart-title">${title}</h2>
			<ul class="chart-legend">
				${legends}
			</ul>
		</div>
	</section>
`;

export const li = (palette, value, legend, border, icons, i) => html`<li
	data-value=${value ? value : 0}
	data-color=${palette[i]}
	data-border=${border}
	data-icon=${icons ? `./images/icons/${icons[i]}` : ``}>
	${legend}
</li>`;
