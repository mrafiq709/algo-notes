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
		<div className="markdown-body p-4">
			<ReactMarkdown
				children={content}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
			/>
		</div>
	);
}
