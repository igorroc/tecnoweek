import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
// import PageNotFound from "./pages/404"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"
import Inscricao from "./pages/Inscricao"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/inscricao" element={<Inscricao />} />
				<Route path="/minicursos" element={<Inscricao />} />
				<Route path="/torneio" element={<Inscricao />} />
				<Route path="/cpu" element={<Inscricao />} />
				<Route path="*" element={<ComingSoon />} />
			</Routes>
		</Router>
	)
}
