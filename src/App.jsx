import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
	return (
		<HashRouter>
			<DarkModeToggle />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/posts/:slug" element={<PostPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
