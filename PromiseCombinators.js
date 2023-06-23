console.log("Hello");
function printMessage(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like The ${video} video`);
    }, 100);
  });
}
function shareTheVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share The ${video} video`);
    }, 100);
  });
}

// if any one of the promise failed all promise are not executed
Promise.all([
    printMessage("Roadside Coder"),
    likeTheVideo("javaScript"),
    shareTheVideo("javaScript")
])
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})
console.log("stop")

// promise.race it will return first fullfilled or rejected promise
Promise.race([
  printMessage("Roadside Coder"),
  likeTheVideo("javaScript"),
  shareTheVideo("javaScript"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// promise.allSettled will return all promises even any one rejected it will return all fullfiled and rejected promises
Promise.allSettled([
  printMessage("Roadside Coder"),
  likeTheVideo("javaScript"),
  shareTheVideo("javaScript"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("stop");


// promise.any will return onlry first fullfilled promise ignore all rejected promises
Promise.any([
  printMessage("Roadside Coder"),
  likeTheVideo("javaScript"),
  shareTheVideo("javaScript"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("stop");
