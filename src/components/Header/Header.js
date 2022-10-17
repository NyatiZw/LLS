import React from 'react'
import './header.scss'
import {animateScroll as scroll} from 'react-scroll'


const Header = () => {
	return (
		<header className="c-header">
			<div className="c-header__logo" onClick={() => scroll.scrollToTop()}>
				<img className='c-header__logo-img' src='logo192.png' alt='logo'/>
			</div>
			<h1> Labour Law Supreme</h1>
			<button className="c-header__burger c-header__burger--open">
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="0" height="0">
					<defs>
						<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
						<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
				</svg>
				<div class="demo">
					<div class="demo__buttons">
						<div class="demo__social-btn-4 demo__social-btn"><i class="fa fa-snapchat"></i></div>
						<div class="demo__social-btn-3 demo__social-btn"><i class="fa fa-instagram"></i></div>
						<div class="demo__social-btn-2 demo__social-btn"><i class="fa fa-facebook"></i></div>
						<div class="demo__social-btn-1 demo__social-btn"><i class="fa fa-twitter"></i></div>
						<div class="demo__open-btn"><i class="fa fa-share-alt"></i></div>
					</div>
				
				</div>
			</button>

		

		</header>
	)
}

export default Header
