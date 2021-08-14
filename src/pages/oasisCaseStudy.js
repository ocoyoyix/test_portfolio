import React from 'react';
import { Helmet } from 'react-helmet';
import OasisCaseStudy from '../components/OasisCaseStudy';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const { title, lang, description } = headData;

  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>,
        <OasisCaseStudy/>
  )
};