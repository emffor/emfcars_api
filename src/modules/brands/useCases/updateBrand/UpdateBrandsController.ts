import { Request, Response } from "express";
import { UpdateBrandsUseCase } from "./UpdateBrandsUseCase";

export class UpdateBrandsController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;
        const { id: idBrand } = request.params;

        const updateBrandsUseCase = new UpdateBrandsUseCase();
        const brand = await updateBrandsUseCase.execute({
            id: idBrand,
            name,
            description
        });

        return response.json(brand);
    }
}