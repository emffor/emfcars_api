import { Request, Response } from "express";
import { RemoveCarsUseCase } from "./RemoveCarsUseCase";

export class RemoveCarsController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const removeCarsUseCase = new RemoveCarsUseCase();

        const result = await removeCarsUseCase.execute(id);

        return response.json(result);
    }
}