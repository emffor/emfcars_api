import { Request, Response } from "express";
import { CreateCarsUseCase } from "./CreateCarsUseCase";


export class CreateCarsController {
    async handle(request: Request, response: Response) {

        const {
            model,
            color,
            brandId,
            transmissionId,
            creation_year,
            model_year
        } = request.body;

        const createCarsUseCase = new CreateCarsUseCase();

        const car = await createCarsUseCase.execute({
            model,
            color,
            brandId,
            transmissionId,
            creation_year,
            model_year
        });

        return response.status(201).json(car);

    }
}