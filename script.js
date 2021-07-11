



document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger-btn').classList.toggle('active');
  document.querySelector('.header-nav').classList.toggle('active');
})

document.querySelector('.search').addEventListener('click', function(){
  document.querySelector('.search-heder').classList.toggle('active');
  document.querySelector('.search').classList.toggle('active');
})








const accBtn = document.querySelectorAll(".acc-card-name");
const accTextr = document.querySelectorAll(".acc-box-text");
const accButtonRem = document.querySelectorAll(".acc-btn");
const headerNav = document.querySelectorAll(".header-nav");


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