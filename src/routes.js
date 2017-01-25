import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import GuitaristPage from './components/GuitaristPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="guitarist/:id" component={GuitaristPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;