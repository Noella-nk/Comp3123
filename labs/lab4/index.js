/*
Purpose:
- serve multiple paths from an Express server using routes
- Serve a static html file
- Extract
 */

const express = require("express");
const app  = express()

const SERVER_PORT = ProcessingInstruction.env.Port || 3000

//-------------------------------------- Set p middleware for Express ----------
// Serve static files
// the URL of the webpage can be accessed through localhost:3000
app.use("/static", express.static("public"))

// Serve JSON
app.use(express.json())

//Read URL params or queries
// extended: true property in JSON object  passed as arg to urlencoded
// lets us use qs library
app.use(express.urlencoded({ extended: true}))
// -------------------------------------------------------------------

app.get("/", (request, response) => {
    response.send("<h1> Welcome to the root of the server - using GET method</h1>")
})

app.get("/hello", (request, response) => {
    response.status(200).send("<h1> Welcome to the /hello path on the server </h1>")
})

app.get("/college", (request, response) =>{
    const college= {
        name: "George Brown polytechnic",
        location: "Toronto",
        established: 1967
    }

    response.json(college)
})

app.get("/students", (request, response) => {
    // Validate
    if(!request.query.name || !request.query.age){
        return response.status(400).json({
            error: "Missing query parameters"
        })
    }
    console.log(request.query)
    const name = request.query.name
    const age = request.query.age

    response.json({
        student_name: name,
        student_age: age
    })
})

app.get("/students/:name/:age", (request, response) => {
    console.log(request.params)

    // if name is null or if age is null -> error
    if(!request.params.name || !request.params.age){
        return response.status(400).json({error: "You must pass in name and age"})
    }
    const name = request.params.name
    const age= request.params.age

    response.json({
        student_name: name,
        student_age: age
    })
})

// ----- Try using POST, PUT, DELETE methods
app.post("/students", (request, response) => {
    const student = request.body
    console.log(student)

    const {name, age} = student // destructuring

    if(!student.name || !student.age){ // Verification of POST body data
        return response.status(400).json({error: "Missing either name or age in body"})
    }

    response.json({
        student_name: name,
        student_age: age
    })
})


// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Noela";
  const lastname = req.query.lastname || "Kabundi";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users  (expects an array of { firstname, lastname })
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

//------

app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost: " + SERVER_PORT)
})