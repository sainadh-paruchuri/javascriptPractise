console.log("Hello")
function printMessage(username,cb){
    setTimeout(()=>{
        cb(`Subscribe to ${username}`)
    },1000)
}
function likeTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Like The ${video} video`);
  }, 100);
}
function shareTheVideo(video, cb) {
  setTimeout(() => {
    cb(`Share The ${video} video`);
  }, 100);
}
printMessage("Roadside Coder",(message)=>{
    console.log(message)
        likeTheVideo("javaScript", (message) => {
        console.log(message);
            shareTheVideo("javaScript", (message) => {
            console.log(message);
            });
    });
})
 
console.log("Stop")