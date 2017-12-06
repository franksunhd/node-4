
//引入一个事件模块
var EventEmitter = require('events');
//创建事件发射对象
var eventOne = new EventEmitter();

//once触发一次完毕
eventOne.once('custom_event', function(value) {
  console.log("触发： ", value);
});

setInterval(function() {
  // 触发 自定义的事件, 并且传递参数 产生10-20的随机数 包含10不包含20
  eventOne.emit("custom_event", Math.floor(Math.random()* 10 + 10));
}, 1000);
