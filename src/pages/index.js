import React from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/Home';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import '../style/main.scss';


  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>'Orlando Coyoy'</title>
        <html lang={lang || 'en'} />
        <meta name="description" content='Orlando Coyoy is a full stack Web Developer with experience in web application development and CMS solutions.' />
      </Helmet>,
        <Home/>
  )
};
