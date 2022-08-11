import React from 'react';
import { Helmet } from 'react-helmet';
import Home from '../components/Home';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>,
        <Home/>
  )
};
