const port = 3000,
  express = require("express"),
  fs = require("fs"),
  app = express();
app.set("view engine", "ejs");
respondWithName: app
  .get("/name", homeController.respondWithName)
  .log(`Server running at http://localhost:${app.get("port")}`);


  const express = require("express");
   app = express()
   homeController = require("./controllers/homeController"),
   layouts=require("express-ejs-layouts");

   app.set("port", process.env.PORT||3000)
   app.set("view engine","ejs");

   app.use(layouts);
   app.use( express.urlencoded({extended:false})

   )
   app.use(express.json());