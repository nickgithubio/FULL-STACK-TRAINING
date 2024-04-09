let age=10;
const info=new Promise((resolve,reject)=>{
    if(age>=18){
        resolve("you can vote");

    }else{
        reject("you can not vote");

    }

})
info.then(result=>console.log(result))
.catch(error=>console.log(error));

const resultInfo=async ()=>{
    try{
        let result=await info;
        console.log(result);
    
    } catch(error){
        console.log(error);
    }
    
}
resultInfo();
