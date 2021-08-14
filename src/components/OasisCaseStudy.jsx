import React, {Component} from 'react'
import Navigation from "./Navigation"
import ProjectImg from './Image/ProjectImg';
import '../style/caseStudy.scss';

class OasisCaseStudy extends Component{
	render(){
		return(
			<>
			<Navigation/>

			<h1 className=''> Building a Pharmaceutical Management System </h1>
			<h2>The Client</h2>
			<p id="client">Oasis Free Clinics is a non-profit, no-cost primary care medical practice and dental clinic, providing exceptional, patient-centered care to uninsured members of the Brunswick, ME community.</p>
			<h2>The Challenges</h2>
			<ul>
				<li><p> Developing an Inventory Sytem that stores a pharmaceutical and its generic names, brand names, strength, common uses, available units, and location in the clinic.</p></li>

				<li><p>Including a search feature which would allow any user to look up a pharmaceutical based on generic name, brand name, or a common use. </p></li>

				<li><p>Allowing the user to manage an individual pharmaceuitcal in order to adjust its available units.</p></li>

			</ul>
			<h2>The Solutions</h2>
			<div className='img-container'>
				<ProjectImg alt='Inventory View' filename={'oasis_inventory.png'} />
			</div>
			<ul>
				<li><p>Using a React front-end and a Spring backend to create a dynamic website. The website content will be generated using a REST API that also allows for all CRUD operations.</p></li>

				<li><p>For requested search features, a many-to-many data model was used. Fundamentally, a pharmaceutical can have many common uses and a common use can be treated by many pharmaceuticals.</p></li>

				<div className='img-container'>
				<ProjectImg alt='Inventory Changes View' filename={'oasis_changes.png'} />


			</div>
							<li><p>A separate page was created in order to make changes to the pharmaceutical. Here the user can modify any of its features, including the stock quantity. </p></li>
			</ul>
			</>
		)
	}
	
}

export default OasisCaseStudy;