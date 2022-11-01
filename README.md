# API #1-Messages

### Structure

```
Controllers
        MessageController

Database
        Connection

Models
        Message

Requests
	requests

Routes
        Message

.env

index.js
```

### To run it locally use this command

```
npm run start
```

### Initialization

```js
require("dotenv").config();

const express = require("express");
const app = express();

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Server started at port no ${Port}`));
```

### Connection with MongoDB

```js
// MongoDB Atlas
const mongoose = require("mongoose");
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("Database Connected!"));
db.on("error", (error) => console.error(error));
```
