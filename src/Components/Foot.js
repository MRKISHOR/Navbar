import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUsersLine , faGlobe ,faFaceGrinHearts , faLayerGroup} from '@fortawesome/free-solid-svg-icons'

const Foot = () => {
  return (
	<div >
		{/* style={{"width":"100%" , "height":"200px"}} */}
		<div className='logo-counter'>
		<h1><FontAwesomeIcon  icon={faUsersLine}/></h1><br></br>
		&nbsp;&nbsp;&nbsp;
		<h5 className='tex'>Trusted by People</h5>
		
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <h1><FontAwesomeIcon  icon={faGlobe}></FontAwesomeIcon> </h1> 
  &nbsp;&nbsp;&nbsp;
  <h5 className='tex'> Accepted Globally </h5>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <h1><FontAwesomeIcon icon={faFaceGrinHearts} /></h1>
  &nbsp;&nbsp;&nbsp;
  <h5 className='tex'>15,865+ Satisfied Client </h5>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <h1><FontAwesomeIcon icon={faLayerGroup} /> </h1>
  &nbsp;&nbsp;&nbsp;
  <h5 className='tex'>Systematic Structured workflow</h5>

  </div>
	  <footer class="footer" >
  	 <div class="container">
  	 	<div class="row-footer">
  	 		<div class="footer-col"  >
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li ><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
             <li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Hot Links</h4>
  	 			<ul>
  	 				<li><a href="#">Career</a></li>
             <li><a href="#">Disclaimer</a></li>
  	 				<li><a href="#">Press Release</a></li>
  	 				<li><a href="#">Terms of Use</a></li>
  	 			</ul>
  	 		</div>
			   <div class="footer-col"> <h4>   Query </h4>

  <form className='fom' >
    
	<input type="text" placeholder="Name"/><br/>
    <input type="email" placeholder="Email"/><br/>
    <input type="contact" placeholder="Contact Number"/><br/>
	<input className='fom-message' type="text" placeholder="Message"/><br/>
    <input className='fom-but' type="button" value="Submit"/><br/>
    
  </form>
</div> 

  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
				
  	 		</div>
			</div>
  	 </div>
	  
  </footer>
  
	</div>
  )
}

export default Foot
