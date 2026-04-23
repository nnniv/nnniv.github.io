(() => {
	const FALLBACK_PALETTE = [
		"red",
		"green",
		"blue",
		"yellow",
		"purple",
		"orange",
	];
	const COLOR_VARIABLES = {
		red: "var(--color-red)",
		green: "var(--color-green)",
		blue: "var(--color-blue)",
		yellow: "var(--color-yellow)",
		purple: "var(--color-purple)",
		orange: "var(--color-orange)",
	};
	const SQUARE_COUNT = 3;

	function shuffle(values) {
		const arr = [...values];

		for (let i = arr.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}

		return arr;
	}

	function parsePalette(value) {
		if (!value) {
			return FALLBACK_PALETTE;
		}

		return value
			.split(",")
			.map((color) => color.trim())
			.filter((color) => Boolean(COLOR_VARIABLES[color]));
	}

	function renderSquares(container) {
		const palette = parsePalette(container.dataset.colorPalette);
		const source = palette.length > 0 ? palette : FALLBACK_PALETTE;
		const chosen = shuffle(source).slice(
			0,
			Math.min(SQUARE_COUNT, source.length),
		);

		container.replaceChildren();

		chosen.forEach((color) => {
			const square = document.createElement("span");
			square.style.display = "inline-block";
			square.style.width = "0.75rem";
			square.style.height = "0.75rem";
			square.style.backgroundColor = COLOR_VARIABLES[color];
			container.appendChild(square);
		});
	}

	function init() {
		document.querySelectorAll(".project-color-squares").forEach(renderSquares);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
		return;
	}

	init();
})();
