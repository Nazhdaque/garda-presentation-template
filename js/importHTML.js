import slide_1 from "../html/slide-1.html?raw";
import slide_2 from "../html/slide-2.html?raw";
import slide_3 from "../html/slide-3.html?raw";
import slide_4 from "../html/slide-4.html?raw";
import slide_5 from "../html/slide-5.html?raw";
import slide_6 from "../html/slide-6.html?raw";
import slide_7 from "../html/slide-7.html?raw";
import slide_8 from "../html/slide-8.html?raw";

const slides = document.querySelector(".main-content");
slides.insertAdjacentHTML("beforeend", slide_1);
slides.insertAdjacentHTML("beforeend", slide_2);
slides.insertAdjacentHTML("beforeend", slide_3);
slides.insertAdjacentHTML("beforeend", slide_4);
slides.insertAdjacentHTML("beforeend", slide_5);
slides.insertAdjacentHTML("beforeend", slide_6);
slides.insertAdjacentHTML("beforeend", slide_7);
slides.insertAdjacentHTML("beforeend", slide_8);
