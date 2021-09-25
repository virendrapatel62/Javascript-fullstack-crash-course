const express = require("express");

function registerMiddlewares(app) {
  app.use(express.json());
}

module.exports = { registerMiddlewares };
