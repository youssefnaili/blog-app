const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

// Middleware

app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Routes
const blogRouter = require('./router/blog');
const userRouter = require('./router/user');
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
