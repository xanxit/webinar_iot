const express = require('express'); 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 1027;
const userRoute= require('./routes/userRoute')
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
mongoose.connect(
  "",
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.on("connected", function () {
  console.log("mongo db connected");
});

mongoose.set("useFindAndModify", false);

app.use('/api',userRoute);

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});