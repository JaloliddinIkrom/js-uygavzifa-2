
 let elForm = document.querySelector(".js-form");
 let elInp = document.querySelector(".js-input");
 let elText = document.querySelector(".js-text") 
  


 elForm.addEventListener("submit", function(evt){ 
  
    evt.preventDefault();   

    let elInpVal = elInp.value;

    if(elInpVal % 3 === 0 && elInpVal % 5 === 0 ){ 
     
       elText.textContent = "Fizz Bazz"
     } 
     else if(elInpVal % 3 === 0){ 
     
       elText.textContent = "Fizz"
    
     }  
     else if (elInpVal % 5 === 0){ 
       elText.textContent = "Bazz"
     } 
    
     else { 
    elText.textContent = "Bu son 3 ga ham 5 ga ham bo'linmaydi"
        
     }  
 })

























