import Header from "./header/Header"
import Main1 from "./main1/Main1"
import Main2 from "./main2/Main2"
import john from "../../assets/Ellipse 1.svg"
import feature1 from '../../assets/1.svg'
import feature2 from '../../assets/2.svg'
import feature3 from '../../assets/3.svg'

const MainPage = () => {
	return (
		<>
			<div className="container">
				<header>
					<Header john={john}/>
				</header>
				<main>
					<Main1/>
					<Main2 feature1={feature1} feature2={feature2} feature3={feature3}/>
				</main>
			</div>
		</>
	)
}

export default MainPage
