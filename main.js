
 let elForm = document.querySelector(".js-form");
 let elInp = document.querySelector(".js-input");
 let elText = document.querySelector(".js-text"); 
  


 elForm.addEventListener("submit", function(evt){ 
  
    evt.preventDefault();   

    var elInpValue = Number(elInp.value.trim());
    elText.classList.add("text-primary", "fs-5", "pb-5");

  var newText = "";
     
  if(elInpValue % 3 == 0){ 

     newText += "Fizz"

  }; 
  if(elInpValue % 5 == 0){ 

      newText += "Bazz"
  }; 
  elText.textContent = newText || elInpValue + "bu son 3-ga ham 5-ga ham bo'linmaydi...";

 }); 


//---------------------------------------------------------------2-vazifa----------------------------------------


 let elFormGrop = document.querySelector(".js-form-grop");
 let elInpput = document.querySelector(".js-inp");
 let elSpanText = document.querySelector(".js-span");
 let elResults = document.querySelector(".js-resalt");
 let elButten = document.querySelector(".js-butten");
  
 let test = Math.round(Math.random() * 50);
 var count = 6;
 
 elResults.textContent = `Urinishlar soni ${count} ta`; 
 console.log(test);

elFormGrop.addEventListener("submit", function(evt){ 
  evt.preventDefault(); 
    

  count--; 

  var elInpVal = Number(elInpput.value.trim());
  elResults.textContent = `Urinishlar soni ${count} ta`;  
  elResults.classList.add("bg-warning", "text-white", "p-3", "mb-4", "mt-3"); 
  elSpanText.classList.add("bg-primary", "text-white", "p-3", "mt-5");
 
  
   
  if(elInpVal > test){ 
    elSpanText.textContent = "Siz Randum sondan katta raqam kiritingiz...!"
    elSpanText.classList.remove("alert-warning");
    elSpanText.classList.add("alert-danger");
  }else if(elInpVal > test){ 

    elSpanText.textContent = "Siz kiritgan raqam Randum raqamdan kichik !"
    elSpanText.classList.remove("alert-danger");
    elSpanText.classList.add("alert-warning"); 
    
  }else{ 
    elSpanText.textContent = "Uraaa topdingiz ! 😎";
    elSpanText.classList.remove("alert-warning");
    elSpanText.classList.remove("alert-danger");
    elSpanText.classList.remove("alert-info");
    elSpanText.classList.add("alert-success");
    elInpput.disabled = true;
    elButten.setAttribute("disabled", true);
  };
  if(count == 0 && elInpVal == test){ 

    elInpput.disabled = true;
    elButten.setAttribute("disabled", true);
    elSpanText.classList.add("alert-success");
    elResults.classList.add("alert-danger");
    elSpanText.textContent = "Yutdingiz  ! 😎";
    elResults.textContent = "Urinishlar soni tugadi";
  }else if(count == 0){ 

    elInpput.disabled = true;
    elButten.setAttribute("disabled", true);
    elSpanText.classList.add("alert-danger");
    elResults.classList.add("alert-danger");
    elSpanText.textContent = "Yutqizdingiz  ! 😥";
    elResults.textContent = "Urinishlar soni tugati";
  }
 
  
}); 
 

// =====================================================================================================

let elFormCurrency = document.querySelector(".js-form_currency");
let elInpCurrency = document.querySelector(".js-input-currency"); 
let elSelect = document.querySelector(".js-select");
let elResaltyus = document.querySelector(".js-results"); 
 

var DOLLAR_CURRENCY = 10935;
var RUBLE_CURRENCY = 180;
var EURO_CURRENCY = 10870;
 
elFormCurrency.addEventListener("submit", function(evt){ 
 
    evt.preventDefault();

    var inpiVal = elInpCurrency.value; 
    var selectVal = elSelect.value; 

    if(selectVal == 'dolor'){ 

        elResaltyus.textContent = Math.round((inpiVal * DOLLAR_CURRENCY)) + ". so'm"; 
        
    }else if(selectVal == 'ruble'){ 

        elResaltyus.textContent = Math.round((inpiVal * RUBLE_CURRENCY)) + ". so'm";
    }else if (selectVal == 'euro'){ 

        elResaltyus.textContent = Math.round((inpiVal * EURO_CURRENCY)) + ". so'm";
    }
    

    elResaltyus.classList.add("bg-primary", "text-white", "p-3");
});


























