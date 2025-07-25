import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [postContent, setPostContent] = useState({});

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

	return (
		<div className="grid grid-cols-1 bg-white text-black dark:bg-gray-900 dark:text-white p-4 min-h-screen">
			<h1 className="text-2xl font-bold">📘 Algorithm Notes</h1>
			<div className="grid grid-cols-12">
				{/* Sidebar */}
				<div className="col-span-2 bg-gray-100 p-4">
					<ul className="space-y-2">
						{posts.map((post) => (
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
				<div className="col-span-10 overflow-y-auto max-h-screen">
					{posts.map((post) => (
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
