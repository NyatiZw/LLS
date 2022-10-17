import React from 'react'
import './projects.scss'
import proj1 from '../../images/proj1.jpg'
import proj2 from '../../images/proj2.jpg'

const Projects = () => {
	return (
		<section className="c-projects">
			<div className="l-container">
				<h2 className="c-projects__heading">Fast, affordable, and reliable</h2>
				<div className="l-projects__wrapper">

					<div className="c-proj">
						<figure>
							<img src={proj1} alt="placeholder1"/> 
							<figcaption>Labour Law Supreme provides the most up-to-date and relevant labour law information at a low, affordable price.	You can be confident that what we have to offer is reliable, as we have been in the industry since 2015.</figcaption>
						</figure>
						<button>Read More</button>
					</div>
					<div className="c-proj">
						<figure>
							<img src={proj2} alt="placeholder2"/> 
							<figcaption>Our mission is to provide guidance and comfort to employees who have had challenges at their place of employment. We provide sound labour related advice and assistance to ensure they get fair treatment as envisaged in the labour relations act.</figcaption>
						</figure>
						<button>Read More</button>
					</div>
					
				</div>
			</div>
		</section>
	)
}

export default Projects
