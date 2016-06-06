
## Express REST API with Mongo DB
Two Mongoose Schema models are created (resources) to route and manipulate through an express server.

###Dependencies
   * Body-Parser
   * Express
   * Mongo
   * Mongoose

##Dev dependencies
   * Gulp
   * gulp-protractor
   * Webpack-stream

### How to test with protractor and selenium
Run a gulp command to bundle build, start server and run selenium and protractor:
```
gulp
```
or
```
npm start
```

*Bella - the only concern I have for you running this, is the server I'm using for mongo in gulp is from my rest_api and I'm not sure it will exist for you? I followed Tyler's code on this. Please let me know if it's a problem and if you have any suggestions...
