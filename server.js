const express=require("express");
const app= express();
const cors = require("cors");
const userRoute = require("./routes/userRoute")
const mongoose= require("mongoose");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
mongoose.connect(
  "mongodb://localhost:27017/apiauth",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", function () {
  console.log("mongo db connected");
});
app.get("/", (req,res)=>{
  res.send("Heyy brother")
})
app.use("/api",userRoute)
app.listen(1027,()=>{
  console.log(`Server started at http://localhost:1027`);
})