// 阻塞
//var a = 1
//while(true){
//    console.log(a)
//}

// 同 异步
var c = 0;

function printIt() {
  console.log(c);
}

function plus(callback) {
  setTimeout(function () {
    c += 1;
    callback();
  }, 1000);
}

plus(printIt);
