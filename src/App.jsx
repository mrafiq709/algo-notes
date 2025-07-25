import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
	return (
		<HashRouter>
			<DarkModeToggle />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
