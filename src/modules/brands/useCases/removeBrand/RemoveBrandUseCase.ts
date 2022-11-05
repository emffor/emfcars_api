import { prisma } from "../../../../database/prismaClients";

export class RemoveBrandUseCase {
    async execute(id: string) {
        const brandExists = await prisma.cars.findFirst({
            where: {
                brandId: id
            },
        })

        if (brandExists) {
            throw new Error("Brand cannot be removed because it has cars associated with it!");
        }

        const brand = await prisma.brands.delete({
            where: {
                id
            },
        })


        return brand;
    }
}


