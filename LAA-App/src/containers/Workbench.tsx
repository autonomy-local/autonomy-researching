import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';
import CsvImport from '../components/CsvImport'

const main = style({
  backgroundColor: 'silver',
  height: '70vh',
});

const Workbench: Component = () => {
  return (
    <div class={main}>
      Workbench Component working...
      <CsvImport />
    </div>
  );
};

export default Workbench;