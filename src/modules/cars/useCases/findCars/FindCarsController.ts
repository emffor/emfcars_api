import { Request, Response } from "express";
import { FindCarsUseCase } from "./FindCarsUseCase";


export class FindCarsController {
    async handle(request: Request, response: Response) {
        const findCarsUseCase = new FindCarsUseCase();

        const cars = await findCarsUseCase.execute();

        return response.json(cars);
    }
}