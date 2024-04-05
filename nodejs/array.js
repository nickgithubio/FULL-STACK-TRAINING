const msg=()=>console.log("Arrow Function");
let data=[10,20,30,40,50,60,"KIET",msg];
console.log(data);
data[6];
data.forEach(value=>console.log(`Value of Array =${value}`));

//for (let value of data){
//console.log(`value of Array =${value}`);
//}

//for(let index in data){
   // console.log(`Value of ${index} is ${data[index]}`);

// }
//for(let i=0;i<data.length;i++){
    //console.log(`value of ${i} is ${data[i]}`);
// }