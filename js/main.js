/// <reference types="../@types/jquery" />
$('.toggler').on('click', function () {
    $('.sidebar').toggle(1000)
})

$('.h-heading').on('click', function () {
    $(this).next('.p-paragraph').slideToggle(300);
});


$('a').on('click', function (e) {
    let aHref = e.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    $('body', 'html').animate({ scrollTop: sectionOffset }, 2000)
})


$('#text-area').on('input', function () {
    var maxLength = 100;
    var currentLength = $(this).val().length;
    var charsLeft = maxLength - currentLength;
    $('.count').text(charsLeft);
});

(function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 26, 2024 13:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the countdown date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the respective elements
        $("#days").html(days);
        $("#hours").html(hours);
        $("#minutes").html(minutes);
        $("#seconds").html(seconds);

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("EXPIRED");
        }
    }, 1000);
})()



$(function () {
    $('.loader').fadeOut(1000, function () {
        $('.loading').slideUp(1000, function () {
            $('body').css('overflow', 'auto')
        })
    })
})