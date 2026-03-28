$(document).ready(function(){
    // Переменные для параллакса
    var yPosition;
    var scrolled = 0;
    var $parallaxElements = $('.icons-for-parallax img');
    
    // Эффект параллакса для иконок
    $(window).scroll(function() {
        scrolled = $(window).scrollTop();
        for (var i = 0; i < $parallaxElements.length; i++) {
            // Разная скорость для каждого слоя
            // Первый слой (передний) движется быстрее
            // Последний слой (задний) движется медленнее
            var speed = 0.15 * (i + 1);
            yPosition = scrolled * speed;
            $parallaxElements.eq(i).css({ top: yPosition + 'px' });
        }
        
        // Эффект параллакса для логотипа (дополнительное задание)
        var $logo = $('.logo');
        if ($logo.length) {
            var logoYPosition = scrolled * 0.5;
            $logo.css({ transform: 'translateY(' + logoYPosition + 'px)' });
        }
    });
});