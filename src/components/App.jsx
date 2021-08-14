import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import OasisCaseStudy from './OasisCaseStudy';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {


  return (  
	    <Switch>                
        	<Route path='/ocs' component={OasisCaseStudy}/>           
        </Switch> 
  );
}

export default App;