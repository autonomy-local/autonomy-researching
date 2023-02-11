import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import MapGL from 'solid-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPTOKEN as string;
const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <main>
      <MapGL
      options={{
        accessToken: MAPBOX_ACCESS_TOKEN, 
        style: 'mb:basic' }}
      viewport={{
      center: [-122.45, 37.78],
      zoom: 11,
    }}
  ></MapGL>
      </main>
    </div>
  );
};

export default App;
