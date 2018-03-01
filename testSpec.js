describe('Play Video on Yandex Page', function() {
    var yandexPage = require('./YandexPage');

    it('should open Yandex Page', function() {
        yandexPage.get();
    });

    it('should find video', function() {
        yandexPage.findVideo("How to buy Bitcoin from Paxful");
    });

    it('should start playing video', function() {
        yandexPage.playVideo();
    });

});