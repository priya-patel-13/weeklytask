var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayspeed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $(window).scroll(function()
{
    $('header').toggleClass('background',$(this).scrollTop()>100);
});


  $(document).ready(function(){
    $("#icon2").click(function(){
        $(".block").toggle("on")
    })

    $("#icon3").click(function(){
        $(".block").toggle("on")
    })

    $("#input1").click(function(){
        $(".searchbar").toggle("on")
    })

    $("#icon4").click(function(){
        $(".searchbar").toggle("on")
    })
  })

  
    const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}




const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))
