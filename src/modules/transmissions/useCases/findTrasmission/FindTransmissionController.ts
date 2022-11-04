import { Request, Response } from "express";
import { FindTransmissionUseCase } from "./FindTransmissionUseCase";

export class FindTransmissionController {
    async handle(request: Request, response: Response) {
        const findTransmissionUseCase = new FindTransmissionUseCase();

        const result = await findTransmissionUseCase.execute();

        return response.json(result);
    }
}