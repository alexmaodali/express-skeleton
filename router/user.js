const express = require("express");
const userRouter = express.Router();
const pool = require("../config/db");

userRouter.get("/user", async (req, res) => {
  const [rows, fields] = await pool.query("select * from `user`");
  console.log(fields[0]);
  res.json(rows);
});

module.exports = userRouter;
