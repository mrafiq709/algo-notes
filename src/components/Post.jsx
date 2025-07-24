import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // or another style you like

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
