import React from 'react'
import {Link} from "gatsby"

import headerStyles from "./header.module.scss"


class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pageName:this.props.pageName,
		}
	}
	render(){
		if(this.state.pageName === "home"){
		return (
		<nav className = {headerStyles.navBar} id="navbar">
			<ul className ={headerStyles.navList}>
				<li>
					<Link className={headerStyles.navItem} to="/">
						Home
					</Link>	
				</li>
				
				<li>
					<Link className={headerStyles.navItem} to="../#about">
						About
					</Link>
				</li>

				<li>
					<Link className={headerStyles.navItem} to="../#projecth">
						Projects
					</Link>	
				</li>
							
				<li>
					<Link className={headerStyles.navItem} to="../#footer">
						Contact Me
					</Link>
				</li>
			</ul>
		</nav>
	);
	}
	else{
		return(
			<nav className = {headerStyles.caseStudyNav} id="caseStudyNav">
			<ul className ={headerStyles.navList}>
				<li>
					<Link className={headerStyles.navItem} to="/">
						Home
					</Link>	
				</li>
				
				<li>
					<Link className={headerStyles.navItem} to="../#about">
						About
					</Link>
				</li>

				<li>
					<Link className={headerStyles.navItem} to="../#projecth">
						Projects
					</Link>	
				</li>
							
				<li>
					<Link className={headerStyles.navItem} to="../#footer">
						Contact Me
					</Link>
				</li>
			</ul>
		</nav>
		);
	}
	}
	
	
}

export default Navigation