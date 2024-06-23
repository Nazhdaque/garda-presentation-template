import "./css/main.css";
import "material-icons/iconfont/round.css";
import "./js/importHTML.js";
import "./js/scrollDownPromptDisable.js";
import "./js/charts/chartDoughnut.js";
import "./js/charts/chartBar.js";
import "./js/charts/chartLine.js";

document.querySelectorAll(".slide").forEach((slide, i) => {
	document.querySelector(".slide-list").insertAdjacentHTML(
		"beforeend",
		`<li>
			<a href="#slide-${i + 1}">
				<span class="sr-only">slide ${i + 1}</span>
			</a>
		</li>`
	);
});

// const heightSetter = new SizeSetter("h");
// heightSetter.initWith([
// 	["h-master-1", "h-slave-1"],
// 	["h-master-1", "h-slave-2"],
// 	["h-master-1", "h-slave-3"],
// 	["h-master-1", "h-slave-4"],
// ]);
