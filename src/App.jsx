import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/Java";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/java" element={<Java />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
