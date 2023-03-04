import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./handlers/errorHandler";
import { routes } from "./routes";

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(errorHandler);

server.use(routes);

server.listen(process.env.PORT || 3333, () => {
  console.log(`Server running on port ${process.env.PORT || 3333}`);
});
