const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const knex = require("./data/dbConfig.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(morgan("dev"));

server.get("/", async (req, res) => {
  try {
    const accounts = await knex.select("*").from("accounts");
    res.status(200).json({ accounts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

server.get("/:id", async (req, res) => {
  try {
    const postByID = await knex
      .select("*")
      .from("accounts")
      .where("id", req.params.id);
    res.status(200).json({ postByID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
server.post("/", async (req, res) => {
  try {
    const newPost = await knex
      .select("*")
      .from("accounts")
      .insert(req.body);
    console.log(newPost);
    const newPostByID = await knex
      .select("*")
      .from("accounts")
      .where("id", newPost[0]);
    res.status(200).json({ newPostByID });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
server.put("/:id", async (req, res) => {
  try {
    const update = await knex
      .select("*")
      .from("accounts")
      .where("id", req.params.id)
      .update(req.body);
    console.log(update);
    res.status(200).json({ message: "Post successfully updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
server.delete("/:id", async (req, res) => {
  try {
    const deleted = await knex
      .select("*")
      .from("accounts")
      .where("id", req.params.id)
      .del();
    res.status(200).json({ deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = server;
