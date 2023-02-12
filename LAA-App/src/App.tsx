import type { Component } from 'solid-js';
import { style } from '@macaron-css/core'; 
import Header from './containers/Header';
import Workbench from './containers/Workbench';
import Toolbox from './containers/Toolbox';

const main = style({
  margin: 0,
  padding: 0
});

const App: Component = () => {
  return (
    <div class={main}>
      <Header />
      <Workbench />
      <Toolbox />
    </div>
  );
};

export default App;
