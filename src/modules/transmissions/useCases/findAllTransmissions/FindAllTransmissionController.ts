import { Request, Response } from "express";
import { FindAllTransmissionUseCase } from "./FindAllTransmissionUseCase";

export class FindAllTransmissionController {
    async handle(request: Request, response: Response) {
        const { transmissionId } = request.params;

        const findAllTransmissionUseCase = new FindAllTransmissionUseCase();

        const result = await findAllTransmissionUseCase.execute(transmissionId);

        return response.json(result);
    }
}

