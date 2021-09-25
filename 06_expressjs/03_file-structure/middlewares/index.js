const express = require("express");

const errorHandlerMiddleware = (error, request, response) => {
  response.status(500).json({ error: "Internal server Error" });
};

const loggerMiddleware = (request, response, next) => {
  const { params, query, body } = request;
  console.log({ params, query, body });

  next();
};

const registerMiddlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(loggerMiddleware);
};

module.exports = {
  errorHandlerMiddleware,
  registerMiddlewares,
  loggerMiddleware,
};
