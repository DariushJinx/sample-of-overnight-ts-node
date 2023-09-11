import { SetupServer } from "./server";
const PORT = 9999;
const server = new SetupServer(PORT);
server.init();
server.start();
