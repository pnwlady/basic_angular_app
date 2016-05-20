
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
   * 


The databases can be
located at ```localhost:4020```

```/api/rabbits``` and ```/api/slugs```

### How to Use
Run mongo ```mongod --dbpath=./db```
Run ```node index``` to start the client and backend servers.
Add slugs by going posting to localhost:4020/api/slugs
