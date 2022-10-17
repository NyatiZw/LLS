import React from 'react'
import './main.scss'
import arrowDown from '../../images/arrow-down.svg'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'

const Main = () => {
	return (
		<main className="c-main">
			<div className="l-container">
				<div className="c-main__content">
					<h1>No more worries.</h1>
					<p>Feeling uncertain about your job security? <br></br>
					  Worried about being unfairly dismissed? <br></br>
					   Labour Law Supreme provides you with all the best representation <br></br>
					   As well as all the information that you need to know before employment starts & ends.</p>
					<Link className="c-main__contact" to="contact" smooth={true} duration={1000}>Contact</Link>
				</div>
				<img className="arrow-down" src={arrowDown} alt="" onClick={() => scroll.scrollToBottom()}/>
			</div>
		</main>
	)
}

export default Main
