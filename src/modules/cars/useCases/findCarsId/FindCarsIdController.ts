import { Request, Response } from "express";
import { FindCarsIdUseCase } from "./FindCarsIdUseCase";


export class FindCarsIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findCarsIdUseCase = new FindCarsIdUseCase();

        const result = await findCarsIdUseCase.execute(id);

        return response.json(result);
    }
}