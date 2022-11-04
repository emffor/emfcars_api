import { Request, Response } from "express";
import { FindBrandsUseCase } from "./FindBrandsUseCase";

export class FindBrandsController {
    async handle(request: Request, response: Response) {
        const findBrandsUseCase = new FindBrandsUseCase();

        const brands = await findBrandsUseCase.execute();

        return response.json(brands);
    }
}