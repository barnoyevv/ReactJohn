import MainPage from "./components/main-page/main-page"
import BlogPage from "./components/blog-page/blog-page"
import Nav from "./components/main-page/nav/Nav"
import Footer from "./components/main-page/footer/Footer"
import "./App.css"
import { Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<>
			<Nav/>
			<Routes>
				<Route path="" element={<MainPage/>}/>
				<Route path="blog-page" element={<BlogPage/>}/>
			</Routes>
			<Footer/>
		</>
	)
}

export default App
