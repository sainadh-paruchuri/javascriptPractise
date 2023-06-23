console.log("start");

const sub=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const result=true;
        if(result)resolve("Subscribe")
        else reject("Why u not subscribe")
    },2000)
});
sub.then((res)=>{
    console.log(res)
})
.catch((err)=>console.log(err))
console.log("End");
