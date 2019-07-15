let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let c1 = document.getElementById("canvas1");
let ctx1 = c1.getContext("2d");
let circles = true;

let x = 100;
let distance = 50;
let i = 20;

const draw2 = () => {
  let speed2 = new Promise(function(resolve, reject) {
    let circles = true;
    if (circles) {
      setInterval(() => {
        ctx.clearRect(0, 0, c1.width, c1.height);
        ctx.beginPath();
        ctx.arc(i, 75, 30, 0, 2 * Math.PI);
        ctx.fill();
        console.log(i);
          if (i === 100) {
            clearInterval(draw2);
          }  
      }, 1);
      resolve();
    } else {
      console.log("error");
      reject(console.log("error"));
    }
  });
};

draw2();

const draw = () => {
  setTimeout(function() {
    i += 0.1;
    ctx1.clearRect(0, 0, c.width, c.height);
    ctx1.beginPath();
    ctx1.rect(i, 20, 10, 100);
    ctx1.fill();
    if (i > 100) {
      console.log("finish");
    } else {
      draw();
    }
  }, 0);
};

draw();