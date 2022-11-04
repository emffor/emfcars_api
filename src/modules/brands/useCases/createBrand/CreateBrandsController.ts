import { Request, Response } from "express";
import { CreateBrandsUseCase } from "./CreateBrandsUseCase";


export class CreateBrandsController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createBrandUseCase = new CreateBrandsUseCase();

        const result = await createBrandUseCase.execute({
            name,
            description
        })

        return response.json(result);
    }
}