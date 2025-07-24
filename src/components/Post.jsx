import ReactMarkdown from "react-markdown";

export default function Post({ content }) {
	return <ReactMarkdown>{content}</ReactMarkdown>;
}
