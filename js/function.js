$(document).ready(function() {  
      $('.providing-slider').slick({
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      });

      var HeaderTop = $('#home').offset().top;

      // При срабатывании события scroll(прокрутка страницы)
      $(window).scroll(function () {
            // Задаем условия
            if ($(window).scrollTop() > HeaderTop) {
                  // Если высота прокрутки больше чем значение в переменной добавляем класс stiky
                  $('#home').addClass('stiky');
            } else {
                  // Если высота прокрутки меньше чем значение в переменной убираем класс stiky
                  $('#home').removeClass('stiky');
            }
      });

      $('.header__mobileToggle').on('click', function (event) {
            event.preventDefault();
            $('.header-nav').toggleClass('open');
      });
});
