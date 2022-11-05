import { prisma } from "../../../../database/prismaClients";


export class RemoveCarsUseCase {
    async execute(id: string) {
        const carExists = await prisma.cars.findFirst({
            where: {
                id
            },
        })

        if (!carExists) {
            throw new Error("Car does not exist!");
        }

        const car = await prisma.cars.delete({
            where: {
                id
            },
        });

        return car;
    }
}