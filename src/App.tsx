import Home from "./pages/Home";
import Location from "./pages/Location";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="location" element={<Location />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
