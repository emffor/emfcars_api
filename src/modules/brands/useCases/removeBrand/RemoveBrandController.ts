import { Request, Response } from "express";
import { RemoveBrandUseCase } from "./RemoveBrandUseCase";

export class RemoveBrandController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const removeBrandUseCase = new RemoveBrandUseCase();

        const result = await removeBrandUseCase.execute(id);

        return response.json(result);
    }
}