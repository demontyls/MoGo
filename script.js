
const accBtn = document.querySelectorAll(".acc-card-name");
const accTextr = document.querySelectorAll(".acc-box-text");
const accButtonRem = document.querySelectorAll(".acc-btn")


      accBtn.forEach(function(item) {
        item.addEventListener("click",function(){
            let accrdBtn = item;
            let accId = accrdBtn.getAttribute("data-acc");
            let accText = document.querySelector(accId);
            let zerId = accrdBtn.getAttribute("data-zer");
            let accButton = document.querySelector(zerId);
            // let accTex = document.querySelector(".acc-text");
        
            
            
            accBtn.forEach(function(item){
              item.classList.remove('active');

            });

            accTextr.forEach(function(item){
              item.classList.remove('active');

            });
            accButtonRem.forEach(function(item){
              item.classList.remove('active');

            });

          
            accrdBtn.classList.add('active');
            accText.classList.add('active');
            accButton.classList.add('active');

        });
      });