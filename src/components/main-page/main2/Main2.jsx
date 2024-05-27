import "./Main2.css"

const Main2 = ({feature1, feature2, feature3}) => {
	return (
		<div>
			<div className="mainFeatures">
						<h2>Featured works</h2>
						<div className="main_Boxes">
							<div className="mainBox">
								<img src={feature1} alt=""/>
								<div className="mainBox_desc">
									<h3>Designing Dashboards</h3>
									<div className="data">
										<div className="year"><span>2020</span></div>
										<h4>Dashboard</h4>
									</div>
									<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								</div>
							</div>
							<div className="mainBox">
								<img src={feature2} alt=""/>
								<div className="mainBox_desc">
									<h3>Vibrant Portraits of 2020</h3>
									<div className="data">
										<div className="year"><span>2018</span></div>
										<h4>Illustration</h4>
									</div>
									<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								</div>
							</div>
							<div className="mainBox">
								<img src={feature3} alt=""/>
								<div className="mainBox_desc">
									<h3>36 Days of Malayalam type</h3>
									<div className="data">
										<div className="year"><span>2018</span></div>
										<h4>Typography</h4>
									</div>
									<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
								</div>
							</div>
						</div>
					</div>
		</div>
	)
}

export default Main2
