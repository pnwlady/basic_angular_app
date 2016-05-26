
## Express REST API with Mongo DB
Two Mongoose Schema models are created (resources) to route and manipulate through an express server.

###Dependencies
   * Body-Parser
   * Express
   * Mongo
   * Mongoose

##Dev dependencies
   * Gulp
   * Gulp-Eslint
   * Webpack-stream

### How to test with protractor and selenium
In the first terminal:
```
webdriver-manager start
```
In a second terminal:
```
node server.js
```
In a third terminal:
```
gulp
```
Run test with:
```
protractor ./test/config.js
```
