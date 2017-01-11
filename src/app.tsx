import { h, render } from 'preact';
import HelloWorld from './HelloWorld';

render(<HelloWorld name="James" />, document.querySelector('#app'));
