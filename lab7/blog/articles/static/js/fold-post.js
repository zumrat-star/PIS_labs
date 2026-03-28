// Получаем все кнопки с классом fold-button
var foldBtns = document.getElementsByClassName("fold-button");

// Добавляем обработчик для каждой кнопки
for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(e) {
        var button = e.currentTarget;
        var post = button.closest(".one-post");
        
        // Переключаем класс folded у поста
        post.classList.toggle("folded");
        
        // Меняем текст кнопки
        button.innerHTML = post.classList.contains("folded") ? "развернуть" : "свернуть";
    });
}