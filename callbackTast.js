/* 동기식
function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  run();
  console.log('Done !!!');
  */

/*비동기식
function run() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
  }
 
  run();
  console.log('Done !!!');
  */

/*callback
function run(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 1000);
  }
 
  run(() => {
    console.log('Done !!!');
  });*/

/*
function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
run().then(() => {console.log('Done !!!');}); //함수가 도착했으면 뒤를 수행해라
run().then(() => {return run()}).then(() => {console.log('Done !!!');});
*/

function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() {
    await run();
    await run();
    console.log('Done !!!');
}
 
process();
