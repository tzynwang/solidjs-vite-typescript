import { Component } from 'solid-js';
import { Router, Routes, Route } from '@solidjs/router';
import HomePage from '@Component/Page/Home';
import BlogPage from '@Component/Page/Blog';
import NotFoundPage from '@Component/Page/NotFound';
import Navigate from '@Component/Common/Navigate';
import { ROUTE } from '@Model/GeneralModel';

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
