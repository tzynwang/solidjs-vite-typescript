import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { ROUTE } from '@Model/GeneralModel';
import cssModule from './index.module.css';

const Navigate: Component = () => {
  /* Main */
  return (
    <nav class={cssModule.wrapper}>
      <A href={ROUTE.home}>home</A>
      <A href={ROUTE.blog} end>
        blog
      </A>
    </nav>
  );
};

export default Navigate;
