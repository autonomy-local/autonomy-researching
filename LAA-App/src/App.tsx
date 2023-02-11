import type { Component } from 'solid-js';
import Header from './containers/Header';
import Workbench from './containers/Workbench';
import Toolbox from './containers/Toolbox';
const App: Component = () => {
  return (
    <div>
      <Header />
      <Workbench />
      <Toolbox />
    </div>
  );
};

export default App;
