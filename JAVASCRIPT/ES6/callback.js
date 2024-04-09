const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);

}

sum(20,30,(sum)=>{
    if(sum>20)
    {
        console.log("Greater than 20");
    }else{
        console.log("less than 20")
    }
    console.log(sum);

});
