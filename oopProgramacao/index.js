import express from "express";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }
}

export default new App().app;
