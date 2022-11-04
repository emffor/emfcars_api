import { Request, Response } from "express";
import { CreateTransmissionUseCase } from "./CreateTransmissionUseCase";


export class CreateTransmissionController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const createTransmissionUseCase = new CreateTransmissionUseCase();

        const result = await createTransmissionUseCase.execute({
            name,
            description
        })

        return response.json(result);
    }
}