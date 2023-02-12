import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';

const main = style({
  backgroundColor: 'grey',
  height: '20vh',
});

const Toolbox: Component = () => {
  return (
    <div class={main}>
      Toolbox Component working...
    </div>
  );
};

export default Toolbox;