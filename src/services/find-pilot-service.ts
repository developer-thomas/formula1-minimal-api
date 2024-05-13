import { FastifyReply } from "fastify";
import { pilots } from "../repositories/pilots-repository";
const TYPE_JSON = "application/json";
import { StatusCode } from "../utils/status-code-enum";

export async function findPilotById(idParam: string, res: FastifyReply) {
  const id = parseInt(idParam);
  const pilotSearchById = pilots.find((pilot) => pilot.id === id);

  if (!pilotSearchById) {
    res.type(TYPE_JSON).code(StatusCode.NotFound);
    res.send({ message: `${StatusCode.NotFound}: Pilot Not Found` });
  } else {
    res.type(TYPE_JSON).code(StatusCode.OK);
    res.send(pilotSearchById);
  }
}
