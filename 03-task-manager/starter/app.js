const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const connectDB = require(`./db/connect`);
require("dotenv").config();
const notFound = require("./middleware/not-found");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);

const port = 3000;
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
startServer();
