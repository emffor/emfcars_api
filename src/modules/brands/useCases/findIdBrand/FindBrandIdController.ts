import { Request, Response } from "express";
import { FindBrandIdUseCase } from "./FindBrandIdUseCase";

export class FindBrandIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const findBrandIdUseCase = new FindBrandIdUseCase();

        const result = await findBrandIdUseCase.execute(id);

        return response.json(result);
    }
}

