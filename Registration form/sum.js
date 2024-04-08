const sumButton=document.getElementById("sum");
sumButton.addEventListener("Click",()=>{
    let num1=prompt("Enter number 1","0");
    let num2=prompt("Enter number 2","0");
    let result=`Sum of (${num1},${num2}) is =${parseint}(num1)+parseint(num2)`;
    const oldData=document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=result;
}); 
// symButton.addEventListener("Click",()=>{
    // const oldData=document.getElementById("result").innerHTML;
    // document.getElementById("result").innerHTML=oldData+(2+2);
// }); 