import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function PostPage() {
	const { slug } = useParams();
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(`/algo-notes/posts/${slug}.md`)
			.then((res) => res.text())
			.then(setContent)
			.catch((err) => {
				setContent(
					"# Not Found\nThe post you're looking for doesn't exist."
				);
				console.error(err);
			});
	}, [slug]);

	return (
		<div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
			<div className="markdown-body p-4">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeHighlight]}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	);
}
