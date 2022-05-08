import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
// import PageNotFound from "./pages/404"
import Home from "./pages/Home"
import ComingSoon from "./pages/ComingSoon"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="*" element={<ComingSoon />} /> */}
			</Routes>
		</Router>
	)
}
