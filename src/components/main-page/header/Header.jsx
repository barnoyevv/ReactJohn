import "./Header.css"

const Header = ({john}) => {
	return (
		<div>
					<div className="header_main">
						<div className="headerMain_text">
							<h1>Hi, I am John, Creative Technologist</h1>
							<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
							<div><button type="submit">Download Resume</button></div>
						</div>
						<div className="headerMain_media">
							<img src={john} alt=""/>
						</div>
					</div>
		</div>
	)
}

export default Header
