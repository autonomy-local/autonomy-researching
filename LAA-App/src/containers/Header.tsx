import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';

const main = style({
  backgroundColor: 'gainsboro',
  height: '10vh',
});

const Header: Component = () => {
  return (
    <div class={main}>
      Header Component working...
    </div>
  );
};

export default Header;