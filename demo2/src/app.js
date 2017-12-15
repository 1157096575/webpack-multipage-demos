import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
  const NUM = 1;
  alert(NUM);
  console.log(Layer);
  var dom = document.getElementById('app');
  var layer = new Layer();
  dom.innerHTML = layer.tpl({
    name: 'john',
    arr: ['apple', 'xiaomi', 'appo']
  });
}

new App();