import { Link } from "react-router-dom";

export default function Navbar({ searchQuery, setSearchQuery }) {
	return (
		<div className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-md h-16">
			{/* Left: Title and Menu Items */}
			<div className="flex items-center space-x-6">
				<h1 className="text-xl font-bold">📘 Algorithm Notes</h1>
				<Link
					to="/"
					className="hover:text-gray-300 transition duration-200"
				>
					C++
				</Link>
				<Link
					to="/java"
					className="hover:text-gray-300 transition duration-200"
				>
					Java
				</Link>
			</div>

			{/* Right: Search Bar */}
			<input
				type="text"
				placeholder="Search posts..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className="w-1/3 p-2 border border-gray-300 rounded text-black"
			/>
		</div>
	);
}
