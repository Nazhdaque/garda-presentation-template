import "./css/main.css";
import "material-icons/iconfont/round.css";
import "./js/importHTML.js";
import "./js/scrollDownPromptDisable.js";

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
