const menu = document.querySelector(".menu_list"),
      humburger = document.querySelector(".humburger"),
      fixBody = document.querySelector("body")
      menuItem = document.querySelectorAll(".menu__item");

      humburger.addEventListener('click', () =>{
          humburger.classList.toggle("humburger-active");
          menu.classList.toggle('menu_list-active');
          fixBody.classList.toggle('body-fixed');
      });

      menuItem.forEach(item =>{
          item.addEventListener('click', () =>{
            humburger.classList.toggle("humburger-active");
            menu.classList.toggle('menu_list-active');
            fixBody.classList.toggle('body-fixed');
          })
      });
      
const showMore = document.getElementById('scenarios-more'),
      hiddensCard = document.querySelector(".scenarios__card_block-hidden"),
      refreshOffers = document.querySelector(".offers");

      showMore.addEventListener('click', () =>{
          hiddensCard.classList.remove('scenarios__card_block-hidden');
          showMore.style.display = 'none';
          refreshOffers.style.margin= '20px 0px 0px 0px';
      });