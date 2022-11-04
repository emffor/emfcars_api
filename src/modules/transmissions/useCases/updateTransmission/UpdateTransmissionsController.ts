import { Request, Response } from "express";
import { UpdateTransmissionsUseCase } from "./UpdateTransmissionsUseCase";

export class UpdateTransmissionsController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        const { id: idTransmission } = request.params;

        const updateTransmissionsUseCase = new UpdateTransmissionsUseCase();
        const transmission = await updateTransmissionsUseCase.execute({
            id: idTransmission,
            name,
            description
        });

        return response.json(transmission);
    }
}

