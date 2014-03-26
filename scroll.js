//
// author YuTingzhao
// date 20140326
// a extension for bootstrap 3.*
//

$(function () {
    $('.scroll-container').each(function () {
        var containerBox = $(this).children('.scroll-box');
        var height = $(this).height();
        var items = containerBox.children('.scroll-item');
        items.css('height', height);
        var count = items.length;
        containerBox.css('height', '' + (height * count) + 'px');
        var currentSeat = 0;
        $('<div class="btn btn-default scroll-down">点我下滑</div>')
          .click(function () {
            currentSeat ++;
            containerBox.css('marginTop', '-' + (currentSeat * height) + 'px');
          })
          .appendTo(this);
        $('<div class="btn btn-default scroll-up">点我上滑</div>')
          .click(function () {
            currentSeat --;
            containerBox.css('marginTop', '-' + (currentSeat * height) + 'px');
          })
          .appendTo(this);
    });
});
