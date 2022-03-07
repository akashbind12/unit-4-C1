const express = require("express")

const app = express();

// create a logger middleware
app.use(logger);

// GET /books => this should return response of { route: "/books"}
app.get("/books", (req, res) => {
    res.send( { route: "/books"})
})

// GET / libraries => this should return response of { route: "/libraries", permission: true}
app.get("/libraries",checkPermission("librarian"), (req, res) => {
    res.send( { route: "/libraries", permission: true})
})

// GET /authors => this should return response of { route: "/authors", permission: true}
app.get("/authors",checkPermission("author"), (req, res) => {
    res.send( { route: "/authors", permission: true})
})

function logger(req, res, next){
    console.log("request path")
    next();
}

function checkPermission(role){
   return function logger(req, res, next){
       if(role==="librarian"){
        return res.send({ route: "/libraries", permission: true})
       }
       if(role==="author"){
        return res.send({ route: "/libraries", permission: true})
       }
    //    return res.send("not alloed")
   };
}

app.listen(4123, () => {
    console.log("listening on port 4123");
})