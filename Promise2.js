console.log("Hello");
function printMessage(username) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve(`Subscribe to ${username}`);
        }, 1000);
    })
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

printMessage("Roadside Coder")
.then((res)=>{
    console.log(res);
    likeTheVideo("javaScript video").then((res)=>{
        console.log(res);
        shareTheVideo("JavaScript video").then((res)=>{
            console.log(res);
        })
    })
})
.catch((err)=>console.log(err))
console.log("Stop");
