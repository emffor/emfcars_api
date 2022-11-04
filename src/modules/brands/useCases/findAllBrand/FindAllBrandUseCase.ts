
import { prisma } from "../../../../database/prismaClients";

export class FindAllBrandUseCase {
    async execute(brandId: string) {
        const cars = await prisma.brands.findMany({
            where: {
                id: brandId
            },
            select: {
                id: true,
                name: true,
                Cars: true
            }
        });

        return cars;
    }
}