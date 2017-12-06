

//on注册事件
//正常退出，会触发。如果手动调用process.exit()，那么不会触发
process.on('beforeExit', function(code){
  console.log("beforeExit: ", code);
});


//只要退出，都会触发
process.on('exit', function(code){
  console.log("exit: ", code);
});

for (var i = 0; i < 5; i++) {
  console.log(i);
}

//当前进程的编号，当进程结束之后，进程号就不在是当前进程了
console.log(`process.pid = ${process.pid}`);
// 0 代表正常退出
// process.exit(0);
