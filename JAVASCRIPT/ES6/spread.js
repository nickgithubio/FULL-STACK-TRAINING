const sum=(num1, num2, num3)=>
{
    console.log("Sum=",(num1+num2+num3));
}
let value=[20,30,50,65];
sum(...value);