// ==UserScript==
// @name notranslate
// @namespace https://github.com/andriell
// @description Добавляет класс notranslate
// @author Рыбалко А.М.
// @license MIT
// @version 1.0
// @include *
// ==/UserScript==
(function (window, undefined) {
    function addClass(items) {
        for(var i = 0; i < items.length; i++) {
            items[i].className += ' notranslate';
        }
    }
    addClass(document.getElementsByTagName('code'));
    addClass(document.getElementsByClassName('code'));
})(window);