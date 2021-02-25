const prevPanelSpan = document.querySelectorAll(".preview span");
const slider = document.querySelector(".slider");
const right = document.querySelector(".right h6");
const add = document.querySelector(".add h6 span");
const additem = document.querySelector(".slider .order .additem");
const order = document.querySelectorAll(".order");
const price = document.querySelector(".slider .price .number2");
const cancel = document.querySelector(".cancel");
const total = document.querySelector(".total");
const images = document.querySelectorAll(".active");


slider.addEventListener("click", function(ev){
      if (ev.target.className == "active") {
        const span = ev.target.nextSibling.innerHTML;
        const src1 = ev.target.src;
        const alt = ev.target.alt;
        url = "url(" + src1 + ") 35%";
        slider.children[1].style.background = url;
        slider.children[1].style.backgroundSize = "cover";
        slider.children[1].children[0].innerHTML = alt;
        slider.children[1].children[1].innerHTML = "Rp. " + span + ",-";
       
          
        add.addEventListener("click", function(ev1){
          let number = 1;  
          order.forEach( el => {           
            el.children[0].innerHTML = alt;
            el.children[1].innerHTML = number;
            total.lastElementChild.innerHTML = number;
            // price.innerHTML = number * span;
            
            el.children[2].addEventListener("click", function(ev2){
              number += 1;
              el.children[1].innerHTML = number;
              total.children[2].innerHTML = number;
              

              if (number > 0) {
                console.log("Now the number I = " + number);
                cancel.style.opacity = "1";
                el.children[0].innerHTML = alt;
              }
              price.innerHTML = number * span;
              ev2.target.preventDefault;
              ev2.target.stopPropagation;

            })

            el.children[3].addEventListener("click", function(ev3){
              number -= 1;
              el.children[1].innerHTML = number;
              total.children[2].innerHTML = number;
              
              if (number === 0) {
                cancel.style.opacity = "0";
                el.children[0].innerHTML = "Belum ada pesanan";
                el.children[1].innerHTML = "-";
                total.children[2].innerHTML = "-";
                price.innerHTML = "-";
                console.log("Now the number II = " + number);
                number = 0;
              }

              price.innerHTML = number * span;
             
              ev3.target.preventDefault;
              ev3.target.stopPropagation;

            })

          })
              ev1.target.preventDefault;
              ev1.target.stopPropagation;

        });

      }
      
})  
