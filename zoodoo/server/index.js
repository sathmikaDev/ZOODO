const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const adminRouter = require("./routes/AdminRoutes");
const foodItemRouter = require("./routes/ProductRoutes");
//create express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/users", userRouter);

//admin route
app.use("/admin", adminRouter);

//fooditem
app.use("/foods", foodItemRouter);

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect(
  "mongodb+srv://kulunu12:kulunu123@cluster0.kqc6kk4.mongodb.net/Cluster0?retryWrites=true&w=majority"
);

//listen to port
app.listen(port, () => {
  console.log("app is listening to the port:", port);
});