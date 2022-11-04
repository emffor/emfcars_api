import { Request, Response } from "express";
import { UpdateCarsUseCase } from "./UpdateCarsUseCase";

export class UpdateCarsController {
    async handle(request: Request, response: Response) {
        const {
            color,
            model,
            brandId,
            transmissionId,
            creation_year,
            model_year
        } = request.body;

        const { id } = request.params;

        const updateCarsUseCase = new UpdateCarsUseCase();
        const car = await updateCarsUseCase.execute({
            id,
            color,
            model,
            brandId,
            transmissionId,
            creation_year,
            model_year
        });

        return response.json(car);
    }
}