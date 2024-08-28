import "./css/main.css";
import "material-icons/iconfont/round.css";
import "./js/importHTML.js";
import "./js/scrollDownPromptDisable.js";
import "./js/charts/chart-doughnut.js";
import { html, render } from "lit-html";

const slides = document.querySelectorAll(".slide");
const finalSlide = slides[slides.length - 1];
const finalSlidelogo = finalSlide.querySelector(".brand-logo");
const contacts = [...document.querySelectorAll(".contacts")];
const socialMedia = [...document.querySelectorAll(".social-media")];
const thanks = document.querySelector(".thanks");
const animatedElements = [
	finalSlide,
	finalSlidelogo,
	contacts,
	socialMedia,
	thanks,
].flat();

const nav = document.querySelector(".slide-list");
slides.forEach((__, i) => {
	nav.insertAdjacentHTML(
		"beforeend",
		`<li>
			<a href="#slide-${i === slides.length - 1 ? `final` : i + 1}">
				<span class="sr-only">slide ${i + 1}</span>
			</a>
		</li>`
	);
});

/* |||||||||| |||||||||| |||||||||| |||||||||| */
const media = {
	telegram: "https://t.me/garda_ai",
	vkontakte: "https://vk.com/garda_tech",
	youtube: "https://www.youtube.com/channel/UCSDsmjJlmqtwYI3jkWyHJLw",
	rutube: "https://rutube.ru/channel/33543082/",
	habr: "https://habr.com/ru/companies/garda/profile/",
};

const mediaNames = [];
const mediaLinks = [];
for (const key in media) {
	mediaNames.push(key);
	mediaLinks.push(media[key]);
}

const link = (media, url) => html`<a
	href="${url}"
	target="_blank"
	rel="noopener noreferrer"
	class="img-box ${media}">
	<img
		class="o-fit-contain"
		loading="lazy"
		decoding="async"
		src="./images/logo-${media}.svg"
		alt="${media} logo"
/></a>`;

const links = [];
mediaNames.forEach((item, i) => links.push(link(item, mediaLinks[i])));
socialMedia.forEach(item => render(links, item));

/* |||||||||| |||||||||| |||||||||| |||||||||| */
const navLinks = document.querySelectorAll(".slide-list > *");
const navLinksAndSlideNumberAnimation = e => {
	const num = e.currentTarget.querySelector(".slide-number");
	if (num) num.style.top = `${num.getBoundingClientRect().height / -4}px`;
	const activeLink = document.querySelector(".slide-list > *.active");
	activeLink && activeLink.classList.remove("active");
	slides.forEach((slide, i) => {
		slide === e.currentTarget &&
			navLinks[i].querySelector("a").click() &
				navLinks[i].classList.add("active");
	});
};
slides.forEach(slide =>
	slide.addEventListener("mouseenter", navLinksAndSlideNumberAnimation)
);
navLinks.forEach(link =>
	link.addEventListener("click", navLinksAndSlideNumberAnimation)
);

/* |||||||||| |||||||||| |||||||||| |||||||||| */
const outro = () => {
	animatedElements.forEach(item => item.classList.add("active"));
	finalSlide.removeEventListener("mouseenter", outro);
};
finalSlide.addEventListener("mouseenter", outro);
// [...navLinks].at(-1).addEventListener("click", outro);

/* |||||||||| |||||||||| |||||||||| |||||||||| */

// const heightSetter = new SizeSetter("h");
// heightSetter.initWith([
// 	["h-master-1", "h-slave-1"],
// 	["h-master-1", "h-slave-2"],
// 	["h-master-1", "h-slave-3"],
// 	["h-master-1", "h-slave-4"],
// ]);
