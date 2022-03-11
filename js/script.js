const menu = document.querySelector(".menu_list"),
      humburger = document.querySelector(".humburger"),
      fixBody = document.querySelector("body")
      menuItem = document.querySelectorAll(".menu__item");

      humburger.addEventListener('click', () =>{
          humburger.classList.toggle("humburger-active");
          menu.classList.toggle('menu_list-active');
          fixBody.classList.toggle('body-fixed')
      });

      menuItem.forEach(item =>{
          item.addEventListener('click', () =>{
            humburger.classList.toggle("humburger-active");
            menu.classList.toggle('menu_list-active');
          })
      });
      
