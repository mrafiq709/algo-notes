import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

export default function Post({ content }) {
	return (
		<div className="markdown-body">
			<ReactMarkdown
				children={content}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
			/>
		</div>
	);
}
