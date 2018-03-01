var YandexPage = function () {
    var inputField = element(By.xpath('//input[@class="input__control"]'));
	var findButton = element(By.xpath('//button[@type="submit"]'));
	var videoPlay = element(By.xpath('.//body/div/div/div/div/div/div[contains (@class, "preview__video")]'));
	var playTimeCurrent = element(By.xpath('.//*/span[@class="ytp-time-current"]'));


    this.get = function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://yandex.ru/video/');    };

    this.findVideo = function(searchInput) {
    inputField.sendKeys(searchInput);
    findButton.click();
    browser.driver.sleep(1000);
    expect(element(By.xpath("//h2[contains(., '"+searchInput+"')]")).isPresent()).toBe(true);
    };

   this.playVideo = function() {
    browser.driver.sleep(1000);
    videoPlay.click();
    browser.driver.sleep(3000);
    browser.switchTo().frame(browser.findElement(By.xpath('.//iframe[@class="sandbox"]')));
    browser.switchTo().frame(browser.findElement(By.xpath('.//iframe[@aria-label="Video"]')));
    expect(playTimeCurrent.getText()).not.toEqual('0:00');
    };

    };
module.exports = new YandexPage();
