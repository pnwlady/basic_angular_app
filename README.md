
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
Run mongo in one terminal:
```
mongod --dbpath=./db
```
Start the client side and backend servers in another terminal:
```
npm start
```
or
```
node index
```

Open your browser and go to:
```
localhost:5000
```


## Slug and Rabbit Databases
Mongo database contents are listed and can be edited.
### Create, Update and Delete Rabbits and Slugs.

Enter Name, Variety and Food in the form fields and click the create, update or delete buttons.

Your new entry will display at the bottom of the creatures list.
