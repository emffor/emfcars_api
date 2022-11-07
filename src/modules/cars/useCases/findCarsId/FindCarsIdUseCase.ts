import { prisma } from "../../../../database/prismaClients";

export class FindCarsIdUseCase {

    async execute(id: string) {

        //buscar carro por id
        const car = await prisma.cars.findFirst({
            where: {
                id: id,
            },
            select: {
                id: true,
                color: true,
                model: true,
                brandId: true,
                transmissionId: true,
                creation_year: true,
                model_year: true,
                Brands: true,
                Transmissions: true
            }
        })

        if (!car) {
            throw new Error("Car not found!");
        }

        return car;

    }
}


