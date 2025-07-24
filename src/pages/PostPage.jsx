import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../components/post";

export default function PostPage() {
	const { slug } = useParams();
	const [content, setContent] = useState("");

	useEffect(() => {
		fetch(`/posts/${slug}.md`)
			.then((res) => res.text())
			.then(setContent);
	}, [slug]);

	return (
		<div>
			<a href="/">← Back</a>
			<Post content={content} />
		</div>
	);
}
