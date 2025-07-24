import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch("/algo-notes/posts/posts.json")
			.then((res) => res.json())
			.then((data) => setPosts(data))
			.catch((err) => {
				console.error("Failed to load posts.json", err);
			});
	}, []);

	// Redirect to the first post on initial load
	useEffect(() => {
		if (posts.length > 0) {
			navigate(`/posts/${posts[0].slug}`);
		}
	}, [posts]);

	return (
		<div className="grid grid-cols-1 bg-white text-black dark:bg-gray-900 dark:text-white p-4 min-h-screen">
			<h1 className="text-2xl font-bold">📘 Algorithm Notes</h1>
			<div className="grid grid-cols-12">
				{/* Sidebar */}
				<div className="col-span-2 bg-grey-100">
					<ul className="space-y-2">
						{posts.map((post) => (
							<li key={post.slug}>
								<Link
									to={`/posts/${post.slug}`}
									className="text-blue-500 hover:underline"
								>
									{post.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{/* Main Content */}
				<div className="col-span-10">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
