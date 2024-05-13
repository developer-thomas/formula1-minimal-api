import { FastifyReply } from "fastify";
import { findTeam } from "../app";
import { teams } from "../repositories/teams-repository";
import { StatusCode } from "../utils/status-code-enum";
const TYPE_JSON = "application/json";

export async function findTeamById(idParam: string, res: FastifyReply) {
  const id = parseInt(idParam);
  const findTeam = teams.find((team) => team.id === id);

  if (!findTeam) {
    res.type(TYPE_JSON).code(StatusCode.NotFound);
    res.send({ message: `${StatusCode.NotFound}: Team not found` });
  } else {
    res.type(TYPE_JSON).code(StatusCode.OK);
    res.send(findTeam);
  }
}
