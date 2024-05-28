import MainPage from "./components/main-page/main-page"
import BlogPage from "./components/blog-page/blog-page"
import Nav from "./components/main-page/nav/Nav.jsx"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Footer from './components/main-page/footer/Footer.jsx';

const App = () => {
	return (
		<div className="container">
			<Nav/>
			<Routes>
				<Route path="" element={<MainPage />} />
				<Route path="blog-page" element={<BlogPage />} />
			</Routes>
			<footer>
				<Footer/>
			</footer>
		</div>
	)
}

export default App
