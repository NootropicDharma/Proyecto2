// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "Project2";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

const authRoutes = require("./routes/auth.routes");
const { geoSearch } = require("./models/User.model");
app.use("/auth", authRoutes);

const profile = require('./routes/profile.routes');
app.use('/profile', profile);

const events = require("./routes/event.routes")
app.use("/profile", events)


//i need a route for creating events 
const eventCreate = require('./routes/createEvents.routes');
app.use('/', eventCreate);




// i also need a route to change profile info 
const changeProfile = require('./routes/changeProfile.routes');
app.use('/', changeProfile)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
