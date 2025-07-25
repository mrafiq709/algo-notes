import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [postContent, setPostContent] = useState({});
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		// Fetch the list of posts
		fetch("/algo-notes/posts/posts.json")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);

				// Fetch content for each post
				data.forEach((post) => {
					fetch(`/algo-notes/posts/${post.slug}.md`)
						.then((res) => res.text())
						.then((content) => {
							setPostContent((prev) => ({
								...prev,
								[post.slug]: content,
							}));
						})
						.catch((err) => {
							console.error(
								`Failed to load ${post.slug}.md`,
								err
							);
						});
				});
			})
			.catch((err) => {
				console.error("Failed to load posts.json", err);
			});
	}, []);

	const scrollToPost = (slug) => {
		const postElement = document.getElementById(slug);
		if (postElement) {
			postElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Filter posts based on the search query in the main content
	const filteredPosts = posts.filter((post) => {
		const content = postContent[post.slug] || "";
		return (
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			content.toLowerCase().includes(searchQuery.toLowerCase())
		);
	});

	return (
		<div className="grid grid-cols-1 bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
			{/* Top Navigation Bar */}
			<div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
				{/* Left: Title */}
				<h1 className="text-xl font-bold">📘 Algorithm Notes</h1>

				{/* Middle: Search Bar */}
				<input
					type="text"
					placeholder="Search posts..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-1/2 p-2 border border-gray-300 rounded"
				/>
			</div>

			<div className="grid grid-cols-12">
				{/* Sidebar */}
				<div className="col-span-2 bg-gray-100 p-4">
					<ul className="space-y-2">
						{filteredPosts.map((post) => (
							<li key={post.slug}>
								<button
									onClick={() => scrollToPost(post.slug)}
									className="text-blue-500 hover:underline"
								>
									{post.title}
								</button>
							</li>
						))}
					</ul>
				</div>
				{/* Main Content */}
				<div className="col-span-10 max-h-screen">
					{filteredPosts.map((post) => (
						<div
							key={post.slug}
							id={post.slug}
							className="markdown-body p-4 border-b border-gray-300"
						>
							<h2 className="text-xl font-semibold">
								{post.title}
							</h2>
							<ReactMarkdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeHighlight]}
							>
								{postContent[post.slug] || "Loading..."}
							</ReactMarkdown>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
