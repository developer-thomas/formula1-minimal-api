import { FastifyInstance } from "fastify";
import { pilots } from "./repositories/pilots-repository";
import { teams } from "./repositories/teams-repository";
import { StatusCode } from "./utils/status-code-enum";
import { RequestParams } from "./models/req-params.interface";
import { findPilotById } from "./services/find-pilot-service";
import { findTeamById } from "./services/find-teams-service";
const TYPE_JSON = "application/json";

export const teamsRoute = async (server: FastifyInstance) => {
  server.get("/teams", async (req, res) => {
    res.type(TYPE_JSON).code(StatusCode.OK);
    return [
      {
        teams,
      },
    ];
  });
};

export const findTeam = async (server: FastifyInstance) => {
  server.get<{ Params: RequestParams }>("/teams/:id", async (req, res) => {
    const paramId = req.params.id;
    await findTeamById(paramId, res);
  });
};

export const pilotesRoute = async (server: FastifyInstance) => {
  server.get("/pilots", async (req, res) => {
    res.type(TYPE_JSON).code(StatusCode.OK);
    return [
      {
        pilots,
      },
    ];
  });
};

// Params é uma tipagem ja definida dentro dos modulos do fastify
export const findPilot = async (server: FastifyInstance) => {
  server.get<{ Params: RequestParams }>("/pilots/:id", async (req, res) => {
    const id = req.params.id;
    await findPilotById(id, res);
  });
};
