const scrollDownPromptDisable = (scrollContainer, prompt) => {
	const prompts = document.querySelectorAll(`${scrollContainer} ${prompt}`);
	prompts.forEach(el => {
		const container = el.closest(`${scrollContainer}`);
		const handler = () => {
			el.style.display = "none";
			container.removeEventListener("scrollend", handler);
		};
		container.addEventListener("scrollend", handler);
	});
};
scrollDownPromptDisable(".main-content", ".scroll-down");
