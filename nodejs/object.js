let studentinfo={
    rollno:1,
    name:"Nick Chaudhary",
    course:"MCA",
    college:"KIET",
    marks:[10,23,45,65,78],
    
    music:()=>console.log("Play Music"),
    play:function playfun(){console.log("Play Cricket")},
}
let arrayvalue=[studentinfo,studentinfo,studentinfo];
arrayvalue.forEach(item=>console.log(item.name));

console.log(studentinfo.music());
console.log(studentinfo.play());
