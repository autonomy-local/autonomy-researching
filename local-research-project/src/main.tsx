/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'
import './index.css'

// 動くがVSCode上でエラーになるので書き方を変更する
// render(() => <App />, document.getElementById('root'))

const root = document.getElementById("root");

render(() => <App />, root!);
