import { prisma } from "../../../../database/prismaClients";

interface ICreateCars {
    color: string;
    model: string;
    brandId: string;
    transmissionId: string;
    creation_year: number;
    model_year: number;
}

export class CreateCarsUseCase {

    async execute({
        model,
        color,
        brandId,
        transmissionId,
        creation_year,
        model_year
    }: ICreateCars) {

        //o carro não pode ser cadastrado com uma marca que não existe
        const brandExists = await prisma.brands.findFirst({
            where: {
                id: brandId
            }
        })

        if (!brandExists) {
            throw new Error("Brand does not exists!");
        }

        //o carro não pode ser cadastrado com uma transmissão que não existe

        const transmissionExists = await prisma.transmissions.findFirst({
            where: {
                id: transmissionId
            }
        })

        if (!transmissionExists) {
            throw new Error("Transmission does not exists!");
        }

        if (creation_year > model_year) {
            throw new Error("Creation year cannot be greater than model year!");
        }

        if (model_year > (creation_year + 1)) {
            throw new Error("Model year cannot be greater than 1 year from creation year!");
        }

        if (model_year > (new Date().getFullYear() + 1)) {
            throw new Error("Model year cannot be greater than 1 year from current year!");
        }

        if (creation_year > new Date().getFullYear()) {
            throw new Error("Creation year cannot be greater than current year!");
        }

        if (creation_year < 1920) {
            throw new Error("Creation year cannot be less than 1920!");
        }

        if (model_year < 1920) {
            throw new Error("Model year cannot be less than 1920!");
        }

        const carAlreadyExists = await prisma.cars.findFirst({
            where: {
                model,
                color,
                brandId,
                transmissionId,
                creation_year,
                model_year
            }
        })

        if (carAlreadyExists) {
            throw new Error("Car already exists!");
        }

        const car = await prisma.cars.create({
            data: {
                model,
                color,
                brandId,
                transmissionId,
                creation_year,
                model_year
            }
        })

        return car;
    }

}