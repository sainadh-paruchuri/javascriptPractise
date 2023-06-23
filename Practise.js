function printName(username){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(username)
    },1000)
})
}
printName("sainadh").then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error("Error",err)
})

function printMessage(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}

printMessage("Roadside Coder")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error("Error", err);
  });