import { Request, Response } from "express";
import { RemoveTransmissionUseCase } from "./RemoveTransmissionsUseCase";

export class RemoveTransmissionController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const removeTransmissionUseCase = new RemoveTransmissionUseCase();

        const result = await removeTransmissionUseCase.execute(id);

        return response.json(result);
    }
}