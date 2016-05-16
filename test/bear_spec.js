describe('all the bears', function() {
  it('it should creat a bear', function() {
    browser.get('http:/localhost:5000');
    element(by.binding('bearsctrl.newBear.name')).sendKeys('test bear');
    element(by.id('creatbear')).click();
    element(by.css('#bearList:first-child')).getText(function(text) {
      expect(text).toEqual('test bear is a bear who likes salmon');
    });
  });
});
