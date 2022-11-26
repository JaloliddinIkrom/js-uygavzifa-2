
 let elForm = document.querySelector(".js-form");
 let elInp = document.querySelector(".js-input");
 let elText = document.querySelector(".js-text") 
  


 elForm.addEventListener("submit", function(evt){ 
  
    evt.preventDefault();   

    var elInpValue = Number(elInp.value.trim());
    elText.classList.add("text-primary", "fs-5", "pb-5")


    if(elInpValue == 0 || elInpValue == ""){
      elText.textContent = "Iltimos raqma kiriting..."

    }else if(elInpValue % 3 == 0 && elInpValue % 5 == 0){ 
     
       elText.textContent = "Fizz Bazz"
     }else if(elInpValue % 3 == 0){ 
     
       elText.textContent = "Fizz"
    
     }else if (elInpValue % 5 == 0){ 
       elText.textContent = "Bazz"
     }else { 
    elText.textContent = "Bu son 3 ga ham 5 ga ham bo'linmaydi"
        
     }   

     elInp.value = "";
 }) 


//---------------------------------------------------------------2-vazifa----------------------------------------


 let elFormGrop = document.querySelector(".js-form-grop");
 let elInpput = document.querySelector(".js-inp");
 let elSpanText = document.querySelector(".js-span");
 let elResults = document.querySelector(".js-resalt");
 let elButten = document.querySelector(".js-butten");
  
 let test = Math.round(Math.random() * 50);
 var count = 6;

 elResults.textContent = `Urinishlar soni ${count}`; 

elFormGrop.addEventListener("submit", function(evt){ 
  evt.preventDefault() 
    

  count--; 

  var elInpVal = Number(elInpput.value);
  elResults.textContent = `Urinishlar soni ${count}`;  
  elResults.classList.add("bg-warning", "text-white", "p-3", "mb-4", "mt-3"); 
  elSpanText.classList.add("bg-primary", "text-white", "p-3", "mt-5")
 
  
   
  if(elInpVal > 50){ 
    elSpanText.textContent = "Randum soni 1 va 50 oralg'dan izlang"
  }else if(elInpVal > test){ 

    elSpanText.textContent = "Siz Randum sondan katta son kirittingiz.."
  }else if(elInpVal < test){ 

    elSpanText.textContent = "Siz Randum sondan kichik son kiritingiz "
  }else if(elInpVal === test){ 
     elSpanText.textContent = "Siz Randum son kiritingiz tabriklaymiz ... 🎉😎"
  }
  if(count == 0){ 

    elInpput.setAttribute("disabled", true);
    elButten.setAttribute("disabled", true);
    elSpanText.textContent = `Siz izlagan son: ${test}`; 
    elResults.textContent = "Urinishlar soni tugadi qayta urinib ko'ring.."; 
    elResults.classList.add("d-none");
  }
  elInpput.value = "";
  
})



























