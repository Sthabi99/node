const port = 3000,
express = require("express"),
app = express();
app.set("view engine", "ejs")
respondWithName: app.get("/name", homeController.respondWithName)
.log(`Server running at http://localhost:${ app.get("port") }`);