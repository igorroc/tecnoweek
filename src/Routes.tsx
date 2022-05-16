import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import Inscricao from "./pages/Inscricao"
import CPU from "./pages/CPU"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/inscricao" element={<Inscricao />} />
				<Route path="/cpu" element={<CPU />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>
		</Router>
	)
}
