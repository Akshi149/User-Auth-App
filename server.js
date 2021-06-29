const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require("./routes/api/users");

const app = express();
const port = 9000;

app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Connect to MongoDB
const mongoURI = "mongodb+srv://userdb:poiu1234@cluster1.flbk6.mongodb.net/Userdb?retryWrites=true&w=majority";
mongoose.connect(
    mongoURI,
    { useNewUrlParser: true,
      useFindAndModify: false,
    useUnifiedTopology: true  
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

