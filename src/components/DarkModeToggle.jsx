import { useEffect, useState } from "react";

export default function DarkModeToggle() {
	const [dark, setDark] = useState(() => {
		return localStorage.theme === "dark";
	});

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [dark]);

	return (
		<button
			className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white fixed top-4 right-4 shadow"
			onClick={() => setDark(!dark)}
		>
			{dark ? "🌙 Dark" : "☀️ Light"}
		</button>
	);
}
