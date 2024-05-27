import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
	return (
		<div>
					<nav>
						<div className="navItems">
							<a href="#">Works</a>
							<NavLink to="/blog-page">
							<p>Blog</p>
							</NavLink>
							<a href="#">Contact</a>
						</div>
						<span><i class="fa-solid fa-bars"></i></span>
					</nav>
		</div>
	)
}

export default Nav
