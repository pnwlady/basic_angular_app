
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

### How to Use
Run mongo ```mongod --dbpath=./db
```
Run ```node index
``` to start the client and backend servers.
Go to ```localhost:5000```

## Slugs and Rabbits
Enter Name, Type and Food in the test fields and click the update Slug or update Rabbit buttons.

New entry will display in url.
Example:
```
http://localhost:5000/?name=Sven&type=black&food=leaf
```

### Database
See slugs by posting to localhost:4020/api/slugs

The databases is located at ```localhost:4020
```

```
/api/rabbits
``` and
```
/api/slugs
```

The angular app is located at ```localhost:5000
```
