const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

if(process.env.NODE_ENV === "production"){
  app.use(express.static("../build"));
}
app.listen(PORT, () => {
  console.log("Server started running on port:" + PORT);
})