import { prisma } from "../../../../database/prismaClients";

export class FindCarsUseCase {
    async execute() {
        const cars = await prisma.cars.findMany({
            include: {
                Brands: true,
                Transmissions: true
            }
        });

        return cars;
    }
}


