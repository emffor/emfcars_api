import { Request, Response } from "express";
import { FindTransmissionIdUseCase } from "./FindTransmissionIdUseCase";

export class FindTransmissionIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findTransmissionIdUseCase = new FindTransmissionIdUseCase();

        const result = await findTransmissionIdUseCase.execute(id);

        return response.json(result);
    }
}

