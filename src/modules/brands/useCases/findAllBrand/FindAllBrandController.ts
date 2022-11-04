import { Request, Response } from "express";
import { FindAllBrandUseCase } from "./FindAllBrandUseCase";

export class FindAllBrandController {
    async handle(request: Request, response: Response) {
        const { brandId } = request.params;

        const findAllBrandUseCase = new FindAllBrandUseCase();

        const result = await findAllBrandUseCase.execute(brandId);

        return response.json(result);
    }
}