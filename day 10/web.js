$(document).ready(function(){
    $("#i1").click(function(){
        $(".box1").toggleClass("hide")
        $(".box2").toggleClass("unhide")
    })
    const questions = document.querySelectorAll(".question");

    questions.forEach((element) => {
      element.addEventListener("click", () => {
        const nextBox = element.nextElementSibling;
        const icons = element.querySelector(".icon");
    
        icons.style.transition = "0.5s linear";
    
        if (nextBox.classList.contains("active")) {
          nextBox.classList.remove("active");
          icons.style.transform = "rotate(0deg)";
        } else {
          document
            .querySelectorAll(".answer.active")
            .forEach((nextBox) => nextBox.classList.remove("active"));
          document
            .querySelectorAll(".icon")
            .forEach((normal) => (normal.style.transform = "rotate(0deg)"));
    
          icons.style.transform = "rotate(180deg)";
          nextBox.classList.add("active");
        }
      });
    });  
    
    
    const cursor = document.querySelector('.cursor');

    const mouse = {
      x: 0,
      y: 0
    }
    
    const cursorPosition = {
      x: 0,
      y: 0
    }
    
    window.addEventListener('mousemove', e => {
      // In theory, can assign cursor position here,
      // but it'll lead to multiple redrawings
      // cursor.style.transform = `translate(${e.x}px, ${e.y}px)`
    
      // We can use js animate
      // But it'll lag a lot
      // cursor.animate({
      //   transform: `translate(${e.x}px, ${e.y}px)`
      // }, {
      //   duration: 2000
      // });
    
      // So just update mouse position
      mouse.x = e.x;
      mouse.y = e.y;
    });
    
    // Speed factor
    // Between 0 and 1;
    // Closer to 0 => smoother
    // 1 => instant
    const speed = 0.15;
    
    const tick = () => {
      // (mouse.x - cursorPosition.x) calculates the difference between the current x-coordinate of the mouse and the current x-coordinate of the cursor.
      // (mouse.x - cursorPosition.x) * speed multiplies the difference by the speed factor, which determines how quickly the cursor should move towards the mouse position
      cursorPosition.x += (mouse.x - cursorPosition.x) * speed;
      cursorPosition.y += (mouse.y - cursorPosition.y) * speed;
    
      // Update cursor position
      cursor.style.transform = `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`;
    
      // Call next frame
      // So tick function is called 60 times per second (might be different depending your fps)
      window.requestAnimationFrame(tick);
    }
    
    tick();



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });



      $(document).ready(function() {

        var counters = $(".count");
        var countersQuantity = counters.length;
        var counter = [];
      
        for (i = 0; i < countersQuantity; i++) {
          counter[i] = parseInt(counters[i].innerHTML);
        }
      
        var count = function(start, value, id) {
          var localStart = start;
          setInterval(function() {
            if (localStart < value) {
              localStart++;
              counters[id].innerHTML = localStart;
            }
          }, 40);
        }
      
        for (j = 0; j < countersQuantity; j++) {
          count(0, counter[j], j);
        }
      });




      const labels = document.querySelectorAll(".accordion__label");
const tabs = document.querySelectorAll(".accordion__tab");

function toggleShow() {
	const target = this;
	const item = target.classList.contains("accordion__tab")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function(tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("active");
			} else {
				tab.classList.remove("active");
			}
		}
	});

	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("active");
			} else {
				tabItem.classList.remove("active");
			}
		}
	});
}

labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});


})





