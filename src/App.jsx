import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts/:slug" element={<PostPage />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
