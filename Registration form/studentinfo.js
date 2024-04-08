const printError = (id, msg) => {
   document.getElementById(id).innerHTML = msg;
}
const validate = () => {
   let nameErr = mmobileErr = emailErr = hobbieErr = langErr = true;
   let data = {
       name: "",
       mobile: "",
       email: "",
       hobbies: [],
       lang: "",
   }
   const name = document.studentFrm.name.value;
   const mobile = document.studentFrm.mobile.value;
   const email = document.studentFrm.email.value;
   const hobbies = document.getElementsByName("hobbies");
   const lang = document.studentFrm.lang.value;

   if (name === "") {
       printError("nameErr", "Please enter your name");
   } else {
       printError("nameErr", "");
       data = { ...data, name };

       nameErr = false;
   }
   if (mobile === "") {
       printError("mobileErr", "Please enter your mobile number");
   } else {
       printError("mobleErr", "");
       data = { ...data, mobile };

       mmobileErr = false;
   }
   if (email === "") {
       printError("emailErr", "Please enter your Email");
   } else {
       printError("emailErr", "");
       data = { ...data, email };
       emailErr = false;
   }
   if (hobbies.length > 0) {
       for (let hobbie of hobbies) {
           if (hobbie.checked === true) {
               data.hobbies.push(hobbie.value);
           }
       }
       if (data.hobbies.length > 0) {
           printError("hobbieErr", "");
           hobbieErr = false;
       } else {
           printError("hobbieErr", "Select your hobbies");
       }
   }
   if (lang === "Select") {
       printError("langErr", "Please Select your Language");
   } else {
       printError("langErr", "");
       data = { ...data, lang };
       langErr = false;
   }

   if (nameErr || mmobileErr || emailErr || hobbieErr || langErr) {
       return false;
   } else {
       alert(JSON.stringify(data));
       return true;
   }
}