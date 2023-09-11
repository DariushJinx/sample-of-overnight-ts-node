import { Server } from "@overnightjs/core";
import * as http from "http";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import cors from "cors";
import { ApiErrorHandler, NotfoundErrorHandler } from "./utils/ApiErrorHandler";
import { BlogController } from "./controllers/blog.controller";
import "./utils/mongoDBConnection";
import { AuthController } from "./controllers/auth.controller";

export class SetupServer extends Server {
  private server?: http.Server;
  constructor(private port: number = 9999) {
    super();
  }
  public init(): void {
    this.setupExpress();
    this.setupControllers();
    this.setupErrorHandler();
  }
  private setupExpress(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({ origin: "*" }));
    this.app.use(
      "/api-doc",
      swaggerUI.serve,
      swaggerUI.setup(
        swaggerJSDoc({
          swaggerDefinition: {
            openapi: "3.0.0",
            info: {
              title: "بک اند",
              version: "1.0.0",
              description: "دارای مسیر های متفاوت",
            },
            servers: [
              {
                url: "http://127.0.0.1:9999",
              },
            ],
            components: {
              securitySchemes: {
                BearerAuth: {
                  type: "http",
                  scheme: "bearer",
                  bearerFormat: "JWT",
                },
              },
            },
            security: [{ BearerAuth: [] }],
          },
          apis: ["./src/**/*ts"],
        }),
        { explorer: true }
      )
    );
  }
  private setupErrorHandler(): void {
    this.app.use(NotfoundErrorHandler);
    this.app.use(ApiErrorHandler);
  }
  private setupControllers() {
    const controllers = [new BlogController(), new AuthController()];
    super.addControllers(controllers);
  }
  public start(): void {
    this.server = http.createServer(this.app);
    this.server.listen(this.port, () => {
      console.log(`Server listen on Port: http://localhost:${this.port}`);
    });
  }
}
