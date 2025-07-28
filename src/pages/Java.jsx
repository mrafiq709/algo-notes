import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Java() {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div className="grid grid-cols-1 bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
			{/* Navbar */}
			<Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

			{/* Main Content */}
			<div className="p-4">
				<h1 className="text-2xl font-bold text-center">Java Notes</h1>
				<p className="text-center mt-4">
					This is the Java page. Add your content here.
				</p>
			</div>
		</div>
	);
}
