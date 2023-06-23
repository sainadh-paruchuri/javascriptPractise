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

const result=async()=>{
    try{
    const message1=await printMessage("Roadside Coder");
    const message2=await likeTheVideo("javaScript")
    const message3=await shareTheVideo("javaScript")
    console.log({message1,message2,message3})
    }
    catch(error){
        console.error(`Promise Failed ${error}`)
    }
}
result()
