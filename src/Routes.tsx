import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
// import PageNotFound from "./pages/404"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import Inscricao from "./pages/Inscricao"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/inscricao" element={<Inscricao />} />
				<Route path="/soon" element={<ComingSoon />} />
			</Routes>
		</Router>
	)
}
