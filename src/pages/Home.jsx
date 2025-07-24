import { Link } from "react-router-dom";

const posts = [
	{ slug: "binary-search", title: "Binary Search" },
	// Add more posts here
];

export default function Home() {
	return (
		<div>
			<h1>My Algorithm Notes</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link to={`/posts/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
