import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
// import PageNotFound from "./pages/404"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
import Home from "./pages/Home"
// import Projects from "./pages/Projects"
// import Links from "./pages/Links"

export function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="*" element={<PageNotFound />} /> */}
			</Routes>
		</Router>
	)
}
