import swaggerUi from "swagger-ui-express";
import swaggerJsDoc, { Options } from "swagger-jsdoc";
import { Express } from "express";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"], 
};

// Define swaggerDocs as the correct type from swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: Express): void => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;
