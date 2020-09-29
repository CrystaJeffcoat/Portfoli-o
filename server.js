const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}
app.use(routes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});