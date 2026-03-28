$(document).ready(function(){
    // Эффект подсветки при наведении на пост
    $('.one-post').hover(
        function(event) {
            // При наведении: делаем тень видимой с прозрачностью 0.1
            $(this).find('.one-post-shadow').animate({opacity: '0.1'}, 300);
            console.log("Навели на пост:", event.currentTarget);
        },
        function(event) {
            // При уходе курсора: скрываем тень
            $(this).find('.one-post-shadow').animate({opacity: '0'}, 300);
            console.log("Убрали курсор с поста:", event.currentTarget);
        }
    );
    
    // Эффект увеличения логотипа при наведении
    $('.logo').hover(
        function() {
            // Увеличиваем ширину на 20px
            var currentWidth = $(this).width();
            $(this).animate({width: currentWidth + 20}, 300);
        },
        function() {
            // Возвращаем исходную ширину
            var currentWidth = $(this).width();
            $(this).animate({width: currentWidth - 20}, 300);
        }
    );
});