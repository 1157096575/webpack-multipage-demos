import '../css/index.css';
import Layer from '../components/layer/layer.js';
import url1 from '../images/bj.jpg'
//import $ from 'jquery';
$("#hello").text('hello');
$.fn.changeStyle = function(colorStr){
  this.css("color", colorStr);
}
$("#hello").changeStyle('blue');
const App = function () {
  const NUM = 1;
  console.log(NUM);
  console.log(Layer);
  var dom = document.getElementById('app');
  var layer = new Layer();
  dom.innerHTML = layer.tpl({
    name: 'john',
    arr: ['apple', 'xiaomi', 'appo']
  });
  document.getElementById('bgDiv').style.width = '100px';
  document.getElementById('bgDiv').style.height = '100px';
  document.getElementById('bgDiv').style.border = '1px solid #000';
  document.getElementById('bgDiv').style.backgroundColor = 'yellow';
  //document.getElementById('bgDiv').style.background = 'url(http://static.fy13322.com/front/public/images/dqrcode.png?914052)';
  //document.getElementById('bgDiv').style.background = 'url('+ url1 +')';
  //document.getElementById('bgDiv').style.background = 'url(./images/bj.jpg)';
  document.getElementById('bgDiv').style.background = 'url('+ require("../images/bj.jpg")+')';
}

new App();