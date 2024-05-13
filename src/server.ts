import fastify from "fastify";
import { teamsRoute, pilotesRoute, findPilot, findTeam } from "./app";
import cors from "@fastify/cors";

const port = 3000;
const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
  methods: ["GET", "POST"],
});

server.register(teamsRoute);
server.register(pilotesRoute);
server.register(findPilot);
server.register(findTeam);

server.listen({ port: port }, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
