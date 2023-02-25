import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';
import HomePage from '../../Page/Home';
import BlogPage from '../../Page/Blog';
import NotFoundPage from '../../Page/NotFound';
import Navigate from '../../Common/Navigate';
import { ROUTE } from '../../../model/GeneralModel';

const RouterLayer: Component = () => {
  /* Main */
  return (
    <Router>
      <Navigate />
      <Routes>
        <Route path={ROUTE.home} component={HomePage} />
        <Route path={ROUTE.blog} component={BlogPage} />
        <Route path={ROUTE.notFound} component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

export default RouterLayer;
