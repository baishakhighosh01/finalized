let firstdiv=document.querySelector(".firstdiv");
let thirddiv=document.querySelector(".thirddiv");
let seconddiv=document.querySelector(".seconddiv");
let menu=document.querySelector(".btn");
let text1=document.querySelector("#text1");
let text2=document.querySelector("#text2");
let img1=document.querySelector("#image1");
let img2=document.querySelector("#image2");
let img3=document.querySelector("#image3");
let wish=document.querySelector(".wishes");
let home=document.querySelector(".homes");


home.addEventListener(('click'),()=>{
   
  seconddiv.style.display="block";
  console.log("heu");

});
menu.addEventListener(('click'),()=>{
   
 
    
     firstdiv.innerText="";
     firstdiv.style.display="none";
    
     seconddiv.style.visibility="visible";
    

});



 img1.addEventListener(('click'),()=>{
      text1.style.visibility="visible";


 });
 img3.addEventListener(('click'),()=>{
  text3.style.visibility="visible";


});

 img2.addEventListener(('click'),()=>{
     text2.style.visibility="visible";

 });

wish.addEventListener(('click'),()=>{
  


  
        seconddiv.style.display="none";
      thirddiv.style.visibility="visible";
  
    
});






     

