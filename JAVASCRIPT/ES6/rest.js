//rest parameters
const sum=(num1=0,num2=0,...numbers)=>{
    let s=0;
    if(numbers.length>0){
    let s=numbers.reduce((a,b)=>a+b)
    }
    console.log("Sum of numbers=", (num1+num2+s));

}
sum();