describe('our super awesome angular app', function() {
  it('should have a 2 way data binding', () => {
    browser.get('http://localhost:4020');
    element(by.model('greeting')).sendKeys('hello world');
    element(by.id('greeting')).getText().then(function(text) {
      expect(text).toEqual('hello world');
    });
  });
});
// // Find element with {{scopelet}} syntax.
// element(by.binding('person.name')).getText().then(function(name) {
//  expect(name).toBe('Foo');
// });

// // Find element with ng-bind="scopelet" syntax.
// expect(element(by.binding('person.email')).getText()).toBe('foo@bar.com');
