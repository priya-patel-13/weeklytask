$(document).ready(function(){
    $('#click').click(function(){
        $('.left1').toggle()
        $('.left2').toggle()
        $('.right1').toggleClass('right2')
    })
})