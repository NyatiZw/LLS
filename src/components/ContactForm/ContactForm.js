import React from 'react'
import './contact-form.scss'


const Contact = () => {
	return (
		<section className="c-contact" id="contact">
			<div className="l-container">			
				<div class="demo">
					<h2 class="penName">We're always here to help</h2>
					<div class="mainCard">
					<div class="mainCardHeader"></div>
					<div class="mainCardContent">
						<div class="miniCard"> 
						<form className="c-contact__form" action="">
							<label htmlFor="">Name</label>
							<input type="text"/>
							<label htmlFor="">Email</label>
							<input type="email" name="" id=""/>
							<label htmlFor="">Message</label>
							<textarea rows="10"></textarea>
							<button type="submit">Submit</button>
						</form>
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>
	)
}



export default Contact
